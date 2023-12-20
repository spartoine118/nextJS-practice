import { WithId } from "mongodb";

export type UserType = {
  firstName: string;
  lastName: string;
  alias?: string;
  email: string;
  linkedInProfile?: string;
  phoneNumber: string;
  password: string;
};

export type UserTypeWithId = WithId<UserType>;
