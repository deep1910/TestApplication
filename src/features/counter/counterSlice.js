import { createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({
 name: 'counter',
 initialState: {
    value: 0,
 },
 reducers: {
        increment: (state) => {
            // The redux toolkit use Immer library for immutable states.
            // It seems like we are mutating the state but it is immutable and taken care of.
            state.value += 1
        },
        decrement: (state) => {
             state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
 })

 export const { increment, decrement, incrementByAmount} = counterSlice.actions
 export default counterSlice.reducer