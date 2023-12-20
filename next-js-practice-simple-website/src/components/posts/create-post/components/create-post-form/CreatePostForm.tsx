"use client";
import { UserType } from "@/database/types/user-types";
import { createPostsPOSTRequest } from "@/services/post-services/posts.services";
import ButtonComponent from "@/components/shared/button-component/ButtonComponent";
import TextAreaLabelComponent from "@/components/shared/text-area-label-component/TextAreaLabelComponent";
import TextInputLabel from "@/components/shared/text-input-label/TextInputLabel";
import { UserToken } from "@/app/token/token-types";
import { useSession } from "next-auth/react";
import React, { FormEvent, useState } from "react";

const CreatePostForm = () => {
  const [postName, setPostName] = useState("");
  const [postContent, setPostContent] = useState("");
  const { data: session, status } = useSession();

  const onCreateForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (session?.user) {
      const user = session.user as UserToken;
      await createPostsPOSTRequest(postName, postContent, user.id);
    }
  };

  return (
    <div className="">
      <form className="flex flex-col items-center" onSubmit={onCreateForm}>
        <TextInputLabel
          label="Post Name"
          placeholder="Name of your post"
          value={postName}
          onChange={(e) => {
            setPostName(e.currentTarget.value);
          }}
        />
        <TextAreaLabelComponent
          label="Post content"
          placeholder="Write your post here"
          value={postContent}
          onChange={(e) => {
            setPostContent(e.currentTarget.value);
          }}
        />
        <ButtonComponent text="Create your post" />
      </form>
    </div>
  );
};

export default CreatePostForm;
