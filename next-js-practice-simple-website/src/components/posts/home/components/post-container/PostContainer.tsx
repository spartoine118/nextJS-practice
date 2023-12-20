import { PostTypeWithId } from "@/database/types/post-types";
import Link from "next/link";
import React from "react";

interface PostContainerProps {
  post: PostTypeWithId;
}

const PostContainer = ({ post }: PostContainerProps) => {
  return (
    <div className="flex flex-col border-2 p-4 gap-4 bg-white">
      <Link href={`/posts/${post._id.toString()}`}>
        <h1 className="text-2xl font-bold underline-offset-auto underline">
          {post.name}
        </h1>
      </Link>
      <p>{post.content}</p>
      <p className="text-end text-sm italic">user name</p>
    </div>
  );
};

export default PostContainer;
