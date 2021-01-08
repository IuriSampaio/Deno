import {Router} from "https://deno.land/x/oak/mod.ts";
import videosController from "./controllers/video.ts"

const routes = new Router();

routes.get('/videos' , videosController.index )
    .get('/videos/:id', videosController.show )
    .post('/videos', videosController.store )
    .delete('/videos/:id', videosController.delete )
    .put('/videos', videosController.update);

export default routes;