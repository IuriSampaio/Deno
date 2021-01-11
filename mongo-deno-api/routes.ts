import {Router} from "https://deno.land/x/oak/mod.ts";
import notes from "./controllers/notes.ts";

const routes = new Router();

routes
    .get('/notes', notes.index )
    .post('/notes', notes.store );

export default routes;