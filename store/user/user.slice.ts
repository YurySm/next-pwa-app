
import {getLocalStorage} from "@/utils";
import {checkAuth, login, logout, register} from "@/store/user/user.actions";
import {createSlice} from "@reduxjs/toolkit";
import {IInitialState} from "@/interfaces/user.interface";

const initialState: IInitialState = {
    user: getLocalStorage('user'),
    isLoading: false,
    isError: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearError(state) {
            state.isError = false
        },
    },
    extraReducers: builder => {
        builder
            .addCase(register.pending, state => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.user = payload.user
            })
            .addCase(register.rejected, state => {
                state.isLoading = false
                state.user = null
            })
            .addCase(login.pending, state => {
                state.isLoading = true
                state.isError = false
            })
            .addCase(login.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.user = payload.user
                state.isError = false
            })
            .addCase(login.rejected, (state, {payload}) => {
                state.isLoading = false
                state.user = null
                state.isError = payload as string
            })
            .addCase(logout.fulfilled, (state) => {
                state.isLoading = false;
                state.user = null
                state.isError = false
            })
            .addCase(checkAuth.fulfilled, (state, {payload}) => {
                state.user = payload.user
            })
    }
})
