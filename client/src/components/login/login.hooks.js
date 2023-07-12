import { useState } from "react";
import { useDispatch } from "react-redux";
import { logedInAction } from "../../store";
import { useNavigate } from "react-router-dom";

import { loginApi } from "../services/api";
import { toast } from "react-toastify";

export const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function getInitialState() {
    return {
      email: "",
      password: "",
    };
  }

  const [state, setState] = useState(getInitialState());

  function loginHandler(e) {
    e.persist();

    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  async function loginHandlerApi() {
    const body = {
      email: state.email,
      password: state.password,
    };

    debugger

    const response = await loginApi(body);
    const data = await response.json();

    if (response.status === 200) {
      dispatch(
        logedInAction.logedIn({
          payload: data,
        })
      );
      toast.success("Login success");
      localStorage.setItem("token", data.token);
      navigate("/");
    } else {
      toast.error(data.errors.map((error) => error.msg).join(","));
    }
  }

  return {
    state,
    loginHandler,
    loginHandlerApi,
  };
};
