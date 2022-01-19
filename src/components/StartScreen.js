import SearchInput from "./Searchbar";
import { EventCards } from "./EventCards.js";
import * as Notifications from "expo-notifications";
import { Button, Text, Platform } from "react-native";
import { useState, useEffect, useRef } from "react";
import Constants from "expo-constants";
import { useSelector } from "react-redux";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldShowSound: true,
    shouldSetBadge: false,
  }),
});

export default function StartScreen() {
  const user = useSelector((state) => state.authUserReducer);
  let name = user.name;
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      alert("Must use physical device for Push Notifications");
    }

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    return token;
  }

  const sendMessage = (token) => {
    fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Accept-encoding": "gzip, deflate",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        to: token,
        title: name,
        body: "Tienes un nuevo spot!",
        data: { data: "id:user ,postId:fotoId" },
        _displayInForeground: true,
      }),
    });
  };

  return (
    <>
      <SearchInput />
      <Button title="send message" onPress={() => sendMessage(expoPushToken)} />
      {/* NOTIFICACIONES  */}
      <EventCards />
    </>
  );
}
