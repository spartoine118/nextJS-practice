// import * as http from "../../../core/http-client"

// export const createPostsPOSTRequest = async () => {
//     const res = await fetch("http://localhost:3000/api/posts/")
// }

// export async function request(url: string, init: RequestInit = {}) {
//     const res = await fetch(url, init);
//     const data = await res.json();
//     return data;
//   }

// for now lets do it like this while core is good to know still need to learn folder structure with services and how to properly structure

export async function fetchPosts() {
  const res = await fetch("http://localhost:3000/api/posts", {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}

export async function fetchPostWithId(id: string) {
  const bodyObj = { _id: id };
  const res = await fetch("http://localhost:3000/api/posts", {
    method: "POST",
    next: { revalidate: 10 },
    body: JSON.stringify(bodyObj),
  });
  const data = await res.json();
  return data;
}

export const createPostsPOSTRequest = async (
  name: string,
  content: string,
  userID: string
) => {
  const bodyObj = { name: name, content: content, userID: userID };
  const res = await fetch("http://localhost:3000/api/posts/create-post", {
    method: "POST",
    body: JSON.stringify(bodyObj),
  });
  const data = await res.json();
  return data;
};
