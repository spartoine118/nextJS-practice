import { connectedDatabase } from "@/database/connection";
import { logger } from "@/app/logger/logger";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: Request) {
  return Response.json("hello");
}

export async function POST(request: Request) {
  const body = JSON.stringify(request.body);
  logger.info(body);
  console.log(body);
  return Response.json(JSON.stringify(body));
}
