import React from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./components/products";
import Login from "./components/login/login";
import Registration from "./components/signUp/signUp";
import NavBar from "./components/navbar/navbar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logedInAction } from "./store";

import { loadUser } from "./components/services/api";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
  async function authUser() {
    if (localStorage.token) {
      try {
        const response = await loadUser(localStorage.token);
        if (response.status === 200) {
          dispatch(
            logedInAction.logedIn({
              payload: { token: localStorage.token },
            })
          );
        }
      } catch (error) {
        dispatch(
          logedInAction.LogedOut()
        );
      }
    }
  }

  authUser();
}, []);

  const isLogedIn = useSelector((state) => state.logedIn.isLogedIn);
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/sign-up" element={<Registration />} />
        <Route exact path="/login" element={<Login />} />
        {isLogedIn  && <Route exact path="/" element={<Products />} />}
      </Routes>
    </Router>
  );
}

export default App;
