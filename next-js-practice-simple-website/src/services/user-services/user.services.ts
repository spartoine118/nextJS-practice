export async function getUserWithID(userID: string) {
  const res = await fetch("http://localhost:3000/api/users", {
    next: { revalidate: 10 },
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userID: userID }),
  });
  return res;
}
