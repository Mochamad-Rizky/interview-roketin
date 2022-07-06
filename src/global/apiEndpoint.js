import CONFIG from "./config";

const API_ENDPOINT = {
  GET_RANDOM_USER: (count) => `${CONFIG.BASE_URL_RANDOM_USER}/api/?results=${count}`,
  GET_FLAG_IMAGE: (countryCode) => `${CONFIG.BASE_URL_COUNTRY}/48x36/${countryCode}.png`
};

export default API_ENDPOINT;
