"use client";
import { useSession } from "next-auth/react";
import React from "react";

const UserProfile = ({ params }: { params: { id: string } }) => {
  const { data: session, status } = useSession();
  return (
    <div>
      <p>User Id: {params.id}</p>
      <p>{JSON.stringify(session)}</p>
      <p>{JSON.stringify(status)}</p>
    </div>
  );
};

export default UserProfile;
