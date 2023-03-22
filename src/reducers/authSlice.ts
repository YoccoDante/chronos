import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: {
            token: '',
            username: ''
        },
    },
    reducers: {
        login: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { login } = counterSlice.actions;

export const selectCount = (state: any) => state.counter.value


export default counterSlice.reducer