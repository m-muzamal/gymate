import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value: false
}

export const gymSlice = createSlice({
    name: "gym",
    initialState,
    reducers: {
        login: (state) => {
            state.value = true
        },
        logout: (state) => {
            state.value = false
        }
    }
})

export const { login, logout } = gymSlice.actions

export default gymSlice.reducer