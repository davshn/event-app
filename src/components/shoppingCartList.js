import React from "react";
import {
	SafeAreaView,
	View,
	FlatList,
	StyleSheet,
	Text,
	StatusBar,
	Image,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import {
	addToCart,
	removeFromCart,
} from "../stateManagement/actions/cartActions";

const ShoppingList = () => {
	const shopState = useSelector((state) => state.shopReducer);
	const events = shopState.cartItems;
	const dispatch = useDispatch();
	const handleAddToCart = (e, item) => {
		e.preventDefault();
		dispatch(addToCart(item));
	};
	const handleRemoveFromCart = (e, item) => {
		e.preventDefault();
		dispatch(removeFromCart(item));
	};
	const renderItem = ({ item }) =>
		item.counter >= 1 ? (
			<Item
				item={item}
				title={item.name}
				price={item.price}
				image={item.eventPic}
				counter={item.counter}
				handleAddToCart={handleAddToCart}
				handleRemoveFromCart={handleRemoveFromCart}
			/>
		) : (
			<>
				 {/* renderizar msj no hay items  */}
			</>
		);

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={events}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
			/>
		</SafeAreaView>
	);
};

const Item = ({
	title,
	price,
	image,
	counter,
	item,
	handleAddToCart,
	handleRemoveFromCart,
}) => (
	<View style={styles.itemContanier}>
		<Image source={{ uri: image }} style={styles.imageStyle} />

		<View style={styles.item}>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.price}>${price}</Text>
		</View>

		<View style={styles.counterStyle}>
			<Icon.Button
				name="ios-remove"
				size={25}
				color="#fff"
				backgroundColor="#fff"
				style={{
					borderRadius: 15,
					backgroundColor: "#bbb",
					height: 30,
					width: 30,
				}}
				iconStyle={{ marginRight: 0 }}
				onPress={(e) => handleRemoveFromCart(e, item)}
			/>

			<Text>{counter}</Text>

			<Icon.Button
				name="ios-add"
				size={25}
				color="#fff"
				backgroundColor="#fff"
				style={{
					borderRadius: 15,
					backgroundColor: "#bbb",
					height: 30,
					width: 30,
				}}
				iconStyle={{ marginRight: 0 }}
				onPress={(e) => handleAddToCart(e, item)}
			/>
		</View>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 5,
		marginTop: StatusBar.currentHeight || 0,
	},
	itemContanier: {
		flex: 4,
		flexDirection: "row",
		backgroundColor: "#EDEDED",
		marginVertical: 8,
		marginHorizontal: 0,
	},
	item: {
		padding: 10,
	},
	title: {
		fontSize: 16,
	},
	imageStyle: {
		width: 50,
		height: 50,
		marginVertical: 8,
		marginHorizontal: 8,
	},
	counterStyle: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
});

export default ShoppingList;
