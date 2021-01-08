import app from "./app.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

const HOST = config().HOST ?? "localhost";
const PORT = config().PORT ?? "3001";

console.log(`Servidor deno em http://${HOST}:${PORT}`);

await app.listen(`${HOST}:${PORT}`);