import { WithId } from "mongodb";

export type PostType = {
  userId: string;
  name: string;
  content: string;
};

export type PostTypeWithId = WithId<PostType>;
