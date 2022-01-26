import SearchInput from "./Searchbar";
import { EventCards } from "./EventCards.js";
import { searchByFilters } from "../stateManagement/actions/getEventsActions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

const initialState = {
	//Estado inicial para usuarios
	name: "",
	initialPrice: "",
	finalPrice: "",
	initialDate: "",
	finalDate: "",
	type: "",
	sortType: "",
};

export default function StartScreen() {
	const dispatch = useDispatch();

//analytics
	useEffect(() => {
		axios.post(`https://app.nativenotify.com/api/analytics`, {
			app_id: 1027,
			app_token: "QDhK0aqm5Kl4RbiDFPKh5U",
			screenName: "Home",
		});
	});
	useEffect(() => dispatch(searchByFilters(initialState)), []);
	return (
		<>
			<SearchInput />
			<EventCards />
		</>
	);
}
