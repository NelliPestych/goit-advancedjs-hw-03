import axios from "axios";

const API_KEY = "16588925-02413834d9828552035921ade";
const BASE_URL = "https://pixabay.com/api/";

export const fetchImages = async (query) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data from Pixabay", error);
    throw error;
  }
};
