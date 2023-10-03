import {createAsyncThunk} from "@reduxjs/toolkit";
import {AuthService} from "@/services/auth/auth.service";
import {removeFromStorage} from "@/services/auth/auth.helper";
import {errorCatch} from "@/api/api.helper";
import {IAuthResponse, IEmailPassword} from "@/interfaces/user.interface";
import {userSlice} from "@/store/user/user.slice";

export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
    'auth/register',
    async (data, thunkAPI) => {
        try {
            return await AuthService.main('register', data)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
    'auth/login',
    async (data, thunkAPI) => {
        try {
            return await AuthService.main('login', data)
        } catch (error) {
            return thunkAPI.rejectWithValue(errorCatch(error))
        }
    }
)

export const logout = createAsyncThunk(
    'auth/logout',
    async () => {
        removeFromStorage()
        return
    }
)

export const checkAuth = createAsyncThunk<IAuthResponse>(
    'auth/check-auth',
    async (_, thunkAPI) => {
        try {
            const response = await AuthService.getNewTokens()
            return response.data
        } catch (error) {
            if(errorCatch(error) === 'jwt expired') {
                thunkAPI.dispatch(logout())
            }
            return thunkAPI.rejectWithValue(error)
        }
    }
)
