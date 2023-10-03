import {axiosClassic} from "@/api/api.intercepter";
import {saveTokenStorage, saveToStorage} from "@/services/auth/auth.helper";
import Cookies from "js-cookie";
import {IAuthResponse, IEmailPassword} from "@/interfaces/user.interface";
import {REFRESH_TOKEN} from "@/constans/token.constans";

export const AuthService = {

    async main (type: 'login' | 'register', data: IEmailPassword) {
        const response = await axiosClassic<IAuthResponse>({
            url: `/auth/${type}`,
            method: "POST",
            data
        })
        if(response.data.accessToken) saveToStorage(response.data)

        return response.data
    },

    async getNewTokens() {
        const refreshToken = Cookies.get(REFRESH_TOKEN)

        const response = await axiosClassic.post<string, {data: IAuthResponse}>(
            '/auth/login/access-token',
            {refreshToken}
        )
        if(response.data.accessToken) saveTokenStorage(response.data)
        return response
    }
}