import { Middleware } from "https://deno.land/x/alosaur@v0.23.0/src/decorator/Middleware.ts";
import { MiddlewareTarget } from "https://deno.land/x/alosaur@v0.23.0/src/models/middleware-target.ts";
import { Context } from "https://deno.land/x/alosaur@v0.23.0/src/models/context.ts";

@Middleware(new RegExp("/"))
export class Log implements MiddlewareTarget<unknown> {
    date:Date = new Date();

    onPreRequest(context:Context<unknown>){
        return new Promise<void>((resolve, reject) =>{
            console.log("ROTA PUBLICA")
            this.date = new Date();
            resolve();
        })
    }

    onPostRequest(context:Context<unknown>){
        return new Promise<void>((resolve, reject) =>{
            console.log("ROTA PRIVADA")
            console.log(new Date().getTime()-this.date.getTime());
            resolve();
        })
    }
}