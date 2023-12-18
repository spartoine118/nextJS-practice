import dbConnection from "../../database/connection";

export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(request: Request) {
  const result = await dbConnection.collection("users").find({}).toArray();

  return Response.json(result);
}
