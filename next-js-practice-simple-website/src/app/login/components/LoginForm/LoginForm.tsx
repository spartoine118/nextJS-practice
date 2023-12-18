"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import TextInputLabel from "../../../shared/components/TextInputLabelComponent/TextInputLabel";
import ButtonComponent from "@/app/shared/components/ButtonComponent/ButtonComponent";
import { signIn } from "next-auth/react";

async function authenticate(username: string, password: string) {
  const res = await signIn("credentials", {
    callbackUrl: "/",
    username: username,
    password: password,
  });
}

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onLoginFormSubmit = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    await authenticate(username, password);
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
      <ButtonComponent text={"Login"} type="submit" />
    </form>
  );
}
