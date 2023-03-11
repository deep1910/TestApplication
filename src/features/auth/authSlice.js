import { createSlice } from "@reduxjs/toolkit"

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: "no user",
        rollNumber: 'Nan'
    },
    reducers: {
        setUser: (state, action) => {
            // the toolkit will handle the immutability itself so we not need to take care of that.
            state.user = action.payload.name // this means payload will be object.
            state.rollNumber = action.payload.rollNumber
            console.log(state.user)
        }
    }
})

export const {setUser} = authSlice.actions
export default authSlice.reducer