import {

  ALLIMAGES,
  CATEGORIES,
  CHECKORDER,
  CHECKOUT,
  IMAGECATEGORIES,
  PRODUCTS,
  TRACKORDER,

} from "../utils/config";
import { apiGet, apiPost, apiPut } from "../utils/utils";

// categories
export function getCategories(data = null) {
  return apiGet(CATEGORIES, data);
}

// products
export function getProducts(data = null) {
  return apiGet(PRODUCTS, data);
}

// checkout

export function checkout(data = null) {
  return apiPost(CHECKOUT, data);
}

export function checkOrder(data = null) {
  return apiPost(CHECKORDER, data);
}

export function trackOrder(data = null) {
  return apiPost(TRACKORDER, data);
}

export function getImageCategories(data = null) {
  return apiGet(IMAGECATEGORIES, data);
}

export function getImages(data = null) {
  return apiGet(ALLIMAGES, data);
}




