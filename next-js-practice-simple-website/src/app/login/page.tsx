import LoginForm from "./components/LoginForm/LoginForm";
import LoginHeader from "./components/LoginHeader/LoginHeader";

export default function LoginPage(): JSX.Element {
  return (
    <div className="login-container">
      <LoginHeader />
      <LoginForm />
    </div>
  );
}
