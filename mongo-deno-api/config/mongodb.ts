import { MongoClient } from "https://deno.land/x/mongo@v0.20.1/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import { Database } from "https://deno.land/x/mongo@v0.20.1/src/database.ts";

const client = new MongoClient();

client.connect(config().URI_MONGODB);

const db:Database = client.database("db-test")

export default db;