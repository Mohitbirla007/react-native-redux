import { configureStore } from "@reduxjs/toolkit";
import { counterSlice, userSlice } from "./slices/userSlice";

const store = configureStore({
    reducer: {users: userSlice.reducer, counter: counterSlice.reducer}    // reducer is combined interegrated in store in case of toolkit. Now store can access all the reducers from userSlice
})
export default store;