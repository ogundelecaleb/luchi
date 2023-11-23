
export const API_BASE_URL = 'http://94.229.79.27:7812/api/v2/auth';
export const getApiUrl = (endpoint) => API_BASE_URL + endpoint

export const LOGIN = getApiUrl('/login')
export const FORGOTPASSWORD = getApiUrl('/forgotpassword')
export const RESETPASSWORD = getApiUrl('/resetpassword')