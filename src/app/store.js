import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import authReducer from "../features/auth/authSlice"

// Now we can use the React Redux hooks to let React components interact with the
// Redux store.We can read data from the store with useSelector, 
// and dispatch actions using useDispatch.

export default configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    },
})