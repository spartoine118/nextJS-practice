"use client";
import LoginForm from "./components/LoginForm/LoginForm";
import LoginHeader from "./components/LoginHeader/LoginHeader";
import { Provider } from "react-redux";
import { store } from "../redux/store";

export default function LoginPage(): JSX.Element {
  return (
    <Provider store={store}>
      <div className="login-container">
        <LoginHeader />
        <LoginForm />
      </div>
    </Provider>
  );
}
