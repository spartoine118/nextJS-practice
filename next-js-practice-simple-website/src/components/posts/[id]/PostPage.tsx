import React from "react";
import { fetchPostWithId } from "../../../services/post-services/posts.services";
import { PostTypeWithId } from "@/database/types/post-types";

const PostPage = async (params: { id: string }) => {
  const res = await fetchPostWithId(params.id);
  const post: PostTypeWithId = res.data;
  return (
    <div>
      <h1>{`Post Name: ${post.name}`}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default PostPage;
