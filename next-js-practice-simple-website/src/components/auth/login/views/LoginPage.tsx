import React from "react";
import LoginForm from "../components/login-form/LoginForm";
import LoginHeader from "../components/login-header/LoginHeader";

const LoginPage = () => {
  return (
    <div className="login-container">
      <LoginHeader />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
