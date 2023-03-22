import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: {
            isAuthenticated: false,
            user: {}
        },
    },
    reducers: {
        login: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value = { isAuthenticated: true, user: action.payload }
        },
        logout: (state, action) => {
            state.value = { isAuthenticated: false, user: {} }
        }
    },
})

// Action creators are generated for each case reducer function
export const { login, logout} = counterSlice.actions;

export const selectCount = (state: any) => state.counter.value


export default counterSlice.reducer