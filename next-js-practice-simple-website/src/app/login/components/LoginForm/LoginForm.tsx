import { ChangeEvent, FormEvent, useState } from "react";
import TextInputLabel from "../TextInputLabelComponent/TextInputLabel";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onLoginFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(username);
  };

  return (
    <form className="flex flex-col items-center" onSubmit={onLoginFormSubmit}>
      <TextInputLabel
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setUsername(e.currentTarget.value);
        }}
        value={username}
        label="Username"
        placeholder="Enter a username"
      />
      <TextInputLabel
        value={password}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setPassword(e.currentTarget.value);
        }}
        type="password"
        label="Password"
        placeholder="Enter a password"
      />
      <button
        className="w-min border-2 border-red-300 p-2 hover:border-red-400 hover:bg-red-400 hover:ease-in duration-100 rounded"
        type="submit"
      >
        Login
      </button>
    </form>
  );
}
