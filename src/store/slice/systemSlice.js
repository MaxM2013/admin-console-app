import { createSlice } from "@reduxjs/toolkit";

export const systemSlice = createSlice({
    name: 'system',
    initialState: {
        isLoading: false,
        loadingCount: 0,
        authInterceptorLoaded: false,
    },
    reducers: {
        startLoading: (state) => {
            state.loadingCount += 1
            state.isLoading = true
            console.log('-------loadingCount(start) = ' + state.loadingCount)
        },
        endLoading: (state) => {
            state.loadingCount -= 1
            console.log('-------loadingCount(end) = ' + state.loadingCount)
            if (state.loadingCount <= 0) {
                state.isLoading = false
                state.loadingCount = 0
            }
        },
        loadAuthInterceptor: (state) => {
            state.authInterceptorLoaded = true
        }
    }
}) 

export const {startLoading, endLoading} = systemSlice.actions

export default systemSlice.reducer
