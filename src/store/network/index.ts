import axios from "axios";
import { bodyJson, uri } from "./setting";

export const getInitialListData = async () => {
	return axios.get(uri, {
		headers: {
			...bodyJson(),
		},
	});
};
