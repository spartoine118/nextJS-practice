import { connectedDatabase } from "@/database/connection";
import { PostType } from "@/database/types/post-types";
import { UserTypeWithId, UserType } from "@/database/types/user-types";
import { ObjectId } from "mongodb";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: Request) {
  return Response.json("abcd");
}

export async function POST(request: Request) {
  const reqBody = await request.json().then((data) => data);
  const dbConnection = await connectedDatabase();
  const data = await dbConnection
    .collection<PostType>("posts")
    .insertOne(reqBody);
  if (data.acknowledged) {
    return Response.redirect("/", 302);
  }
  return Response.json(JSON.stringify(data));
}
