import axios from "axios";

const axiosClient = axios.create({
	baseURL: "https://pixabay.com/api/",
	headers: {
		"content-type": "application/json",
	},
});
axiosClient.interceptors.request.use(async (config) => {
	return config;
});

axiosClient.interceptors.response.use(
	(response) => {
		return response?.data;
	},
	(error) => {
		return error;
	},
);

export default axiosClient;
