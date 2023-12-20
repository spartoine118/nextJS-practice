import React from "react";
import { getUserWithID } from "../../../../services/user-services/user.services";
import { UserTypeWithId } from "@/database/types/user-types";

const UserProfile = async (params: { id: string }) => {
  const data = await getUserWithID(params.id)
    .then((res) => res.json())
    .then((data) => data);
  const parsedData: UserTypeWithId = JSON.parse(data);
  return (
    <div className="flex justify-center">
      <div>
        <p>{`Full Name: ${parsedData.firstName} ${parsedData.lastName}`}</p>
        <p>{`Email: ${parsedData.email}`}</p>
      </div>
    </div>
  );
};

export default UserProfile;
