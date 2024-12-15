import { fetchImages } from "./js/pixabay-api.js";
import { renderImages } from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const searchForm = document.querySelector("#search-form");
const galleryContainer = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

let lightbox = new SimpleLightbox(".gallery a");

// Показ завантажувача
const showLoader = () => loader.classList.add("visible");
const hideLoader = () => loader.classList.remove("visible");

// Очищення галереї
const clearGallery = () => {
  galleryContainer.innerHTML = "";
};

// Функція для пошуку зображень
const handleSearch = async (e) => {
  e.preventDefault();
  const query = e.target.elements.searchQuery.value.trim();

  if (!query) {
    iziToast.error({ title: "Error", message: "Please enter a search query!" });
    return;
  }

  showLoader();
  clearGallery();

  try {
    const { hits } = await fetchImages(query);

    if (!hits.length) {
      iziToast.warning({ message: "Sorry, no images found. Try again!" });
      return;
    }

    galleryContainer.insertAdjacentHTML("beforeend", renderImages(hits));
    lightbox.refresh();
  } catch (error) {
    iziToast.error({ message: "Something went wrong!" });
  } finally {
    hideLoader();
  }
};

searchForm.addEventListener("submit", handleSearch);
