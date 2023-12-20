import React from "react";
import PostPage from "@/components/posts/[id]/PostPage";

const page = ({ params }: { params: { id: string } }) => {
  return <PostPage id={params.id} />;
};

export default page;
