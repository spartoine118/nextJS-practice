import Image from "next/image";
import { UserType } from "./database/types/user-types";
import Link from "next/link";

async function fetchData() {
  const data = (await fetch("http://localhost:3000/api/hello"))
    .json()
    .then((value) => value)
    .then((data) => JSON.stringify(data));

  return data;
}

export default async function Home() {
  const data = await fetchData();

  return (
    <div>
      <Link href={"/login"}>Go to Login</Link>
    </div>
  );
}
