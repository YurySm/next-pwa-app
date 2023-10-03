import Cookies from "js-cookie";
import {IAuthResponse, ITokens} from "@/interfaces/user.interface";
import {ACCESS_TOKEN, REFRESH_TOKEN} from "@/constans/token.constans";


export const saveTokenStorage = (data: ITokens) => {
    Cookies.set(ACCESS_TOKEN, data.accessToken)
    Cookies.set(REFRESH_TOKEN, data.refreshToken)
}

export const getAccessToken = () => {
    return Cookies.get(ACCESS_TOKEN) || null
}

export const getUserFromStore = () => {
    return JSON.parse(localStorage.getItem('user') || '{}')
}

export const removeFromStorage = () => {
    Cookies.remove(ACCESS_TOKEN)
    Cookies.remove(REFRESH_TOKEN)
    localStorage.removeItem('user')
}

export const saveToStorage = (data: IAuthResponse) => {
    saveTokenStorage(data)
    localStorage.setItem('user', JSON.stringify(data.user))
}
