import axios from "../utils/axios";

export const getPrice = async (distance) => {
	const result = await axios.get(
		`https://grabapp.api.atseeds.com/booking/getPrice?distance=${distance}`
	);
	return result.data.price;
};
