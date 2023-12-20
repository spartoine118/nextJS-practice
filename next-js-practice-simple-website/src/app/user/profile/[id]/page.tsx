import React from "react";
import UserProfile from "@/components/user/profile/[id]/ProfilePage";

const page = async ({ params }: { params: { id: string } }) => {
  return <UserProfile id={params.id} />;
};

export default page;
