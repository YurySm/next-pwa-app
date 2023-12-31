export interface IUser {
    id: number
    email: string
    name: string
    avatarPath?: string
    phone: string
    isAdmin: boolean
}

export interface IUserState {
    email: string
    isAdmin: boolean
}

export interface ITokens {
    accessToken: string
    refreshToken: string
}

export interface IInitialState {
    user: IUserState | null
    isLoading: boolean
    isError: boolean | string
}

export interface IEmailPassword {
    email: string
    password: string
}

export interface IAuthResponse extends ITokens {
    user: IUser
}
