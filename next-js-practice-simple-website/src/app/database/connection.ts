import { MongoClient } from "mongodb";

const dbUri = "mongodb://localhost:27017";
const client = new MongoClient(dbUri);

async function run() {
  try {
    await client.connect();

    await client.db("user-reg-antoine").command({ ping: 1 });
    console.log("Connected to DB");
  } finally {
    // await client.close();
  }
}

run().catch(console.dir);

export default client.db("user-reg-antoine");
