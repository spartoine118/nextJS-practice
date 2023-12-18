import Link from "next/link";

export default async function Home() {
  return (
    <div>
      <Link href={"/login"}>Go to Login</Link>
      <Link href={`/user/profile/${"abcd"}`}>Go to user profile</Link>
    </div>
  );
}
