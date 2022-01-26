import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import { addToCart, removeFromCart } from "../stateManagement/actions/cartActions";
import { CartImage, Counter, ItemContainer, Title } from "../generiComponents/GenericStyles";

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
		<SafeAreaView style={{flex: 5}}>
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
	<ItemContainer style={styles.itemContanier}>
		<CartImage source={{ uri: image || "https://i.pinimg.com/564x/55/05/b7/5505b700ffbba3f9190799cb0c532535.jpg" }}/>

		<View style={{padding: 10}}>
			<Title>{title}</Title>
			<Title>${price}</Title>
		</View>

		<Counter>
			<Icon.Button
				name="ios-remove"
				size={18}
				color="#fff"
				borderRadius={15}
				style={{
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#776bc7ff",
					height: "45%",
					width: 30,
				}}
				iconStyle={{ alignSelf: "center",marginRight: 0, bottom: "15%", right: "8%" }}
				onPress={(e) => handleRemoveFromCart(e, item)}
			/>

			<Title>{counter}</Title>

			<Icon.Button
				name="ios-add"
				size={18}
				color="#fff"
				borderRadius={15}
				style={{
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#776bc7ff",
					height: "45%",
					width: 30,
				}}
				iconStyle={{ alignSelf: "center",marginRight: 0, bottom: "15%", right: "8%" }}
				onPress={(e) => handleAddToCart(e, item)}
			/>
		</Counter>
	</ItemContainer>
);

const styles = StyleSheet.create({
	itemContanier: {
		flex: 4,
		flexDirection: "row",
		marginVertical: 8,
		marginHorizontal: 0,
	}
})

export default ShoppingList;