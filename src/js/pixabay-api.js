import axios from "axios";

const API_KEY = "52465106-83256c19c806c121527b257ca"; 
const BASE_URL = "https://pixabay.com/api/";

export async function getImagesByQuery(query) {
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
}
