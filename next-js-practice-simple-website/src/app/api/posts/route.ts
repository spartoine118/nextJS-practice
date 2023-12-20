import { connectedDatabase } from "@/database/connection";
import { PostType, PostTypeWithId } from "@/database/types/post-types";
import { ObjectId } from "mongodb";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: Request) {
  const dbConnection = await connectedDatabase();
  const post = dbConnection.collection<PostType>("posts").find({}).toArray();
  const data = (await post).map((value) => value);
  return Response.json({ data: data });
}

export async function POST(request: Request) {
  const reqBody = await request.json().then((data) => data);
  const query: Partial<PostTypeWithId> = {
    _id: new ObjectId(reqBody._id),
  };
  const dbConnection = await connectedDatabase();
  const post = await dbConnection.collection<PostType>("posts").findOne(query);
  return Response.json({ data: post });
}
