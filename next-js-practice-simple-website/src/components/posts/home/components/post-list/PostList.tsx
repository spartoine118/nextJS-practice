import { PostTypeWithId } from "@/database/types/post-types";
import React from "react";
import PostContainer from "../post-container/PostContainer";
import { fetchPosts } from "@/services/post-services/posts.services";

const PostList = async () => {
  const data: object = await fetchPosts();
  const posts: PostTypeWithId[] = Object.values(data)[0];
  return (
    <div className="flex flex-col gap-2 border-2 rounded-md m-4 p-8 bg-blue-400">
      {posts.length ? (
        posts.map((post) => (
          <PostContainer key={post._id.toString()} post={post} />
        ))
      ) : (
        <div>There are no posts</div>
      )}
    </div>
  );
};

export default PostList;
