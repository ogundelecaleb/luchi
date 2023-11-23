

import { FORGOTPASSWORD, LOGIN, RESETPASSWORD } from "../utils/AuthConfig";
import { apiPost, clearUserData, setUserData, apiDelete, setUserTempData } from "../utils/utils";


// export function login(data) {
//     return apiPost(LOGIN, data)

// }

export function login(data) {
    return new Promise((resolve, reject) => {
        return apiPost(LOGIN, data).then((res) => {
            // if (res.data.emailVerified) {
            setUserData(res);
            return
            // }
            // resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

export function signIn(data) {
    return apiPost(LOGIN, data)
}

export function forgotPassword(data) {
    return apiPost(FORGOTPASSWORD, data)
}

export function resetPassword(data) {
    return apiPost(RESETPASSWORD, data)
}


// export function signup(data) {
//     // return apiPost(SIGNUP, data)
//     return new Promise((resolve, reject) => {
//         return apiPost(SIGNUP, data).then((res) => {
//             setUserTempData(res).then(() => {
//                 resolve(res)
//                 // saveUserData(res)
//             });
//             return
//             resolve(res)
//         }).catch((error) => {
//             reject(error)
//         })
//     })
// }

export function logout() {

    clearUserData()
}



// export function forgotPassword(data) {
//     return apiPost(FORGOTPASSWORD, data)
// }
