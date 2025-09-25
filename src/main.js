import { getImagesByQuery } from "./js/pixabay-api.js";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from "./js/render-functions.js";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const query = e.target.elements["search-text"].value.trim();
  if (!query) {
    iziToast.warning({
      title: "Увага",
      message: "Введіть слово для пошуку!",
    });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);

    if (!data.hits.length) {
      iziToast.error({
        title: "Помилка",
        message:
          "Sorry, there are no images matching your search query. Please try again!",
      });
      return;
    }

    createGallery(data.hits);
  } catch (error) {
    iziToast.error({
      title: "Помилка",
      message: "Щось пішло не так",
    });
  } finally {
    hideLoader();
  }
});
