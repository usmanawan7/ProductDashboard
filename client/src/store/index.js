
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {isLogedIn: false, token: ''}

const logedInSlice = createSlice ({
    name: 'login', // use as identifier
    initialState,
    reducers: {
      logedIn(state, action) {
        state.isLogedIn = true;
        state.token = action.payload.token
      },
      LogedOut(state) {
        state.isLogedIn = false;
        state.token = ""
      },
    }
})

const store = configureStore({
  reducer: {
   logedIn:  logedInSlice.reducer
  }
})
export const logedInAction = logedInSlice.actions
export default store