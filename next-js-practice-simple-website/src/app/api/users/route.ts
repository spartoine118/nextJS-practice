import { connectedDatabase } from "@/database/connection";
import { UserType, UserTypeWithId } from "@/database/types/user-types";
import { ObjectId } from "mongodb";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: Request) {
  return Response.json("hello");
}

export async function POST(request: Request) {
  const reqBody = await request.json().then((data) => data);
  const dbConnection = await connectedDatabase();
  const query: Partial<UserTypeWithId> = {
    _id: new ObjectId(reqBody.userID),
  };
  const dbFetch = await dbConnection
    .collection<UserType>("users")
    .findOne(query);
  return Response.json(JSON.stringify(dbFetch));
}
