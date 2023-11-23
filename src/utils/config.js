
export const API_BASE_URL = 'https://luchi.vantapp.com/api';
export const getApiUrl = (endpoint) => API_BASE_URL + endpoint

export const PRODUCTS = getApiUrl('/products');
export const CATEGORIES = getApiUrl('/categories');
export const CHECKOUT = getApiUrl('/checkout');
export const CHECKORDER = getApiUrl('/check-order');
export const TRACKORDER = getApiUrl('/track-order');
export const IMAGECATEGORIES = getApiUrl('/image-categories');
export const ALLIMAGES = getApiUrl('/all-images');

