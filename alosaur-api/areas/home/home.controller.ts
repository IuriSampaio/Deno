import {Controller, Request, Response} from 'https://deno.land/x/alosaur@v0.23.0/mod.ts';
import { Body , Get , Cookie , Delete , Param , Post , Put , QueryParam , Req , Res } from 'https://deno.land/x/alosaur@v0.23.0/src/decorator/mod.ts';

@Controller("/home")
export class HomeController {

    @Get("/text")
    text(
        @QueryParam("name") name : string,
        @QueryParam("t") t : string,
        @Cookie("username") username : string
    ){
        return `eae ${name}, de boa ${t}? nomefake ${username}`
    }

    @Get("/json")
    json(
        @Req() request :Request,
        @Res() response :Response,
        @QueryParam("name") name : string
    ){
        return response.getRaw();
    }

    @Put("/query")
    putQuery(
        @QueryParam("a") a: string,
        @QueryParam("b") b: string,
        @QueryParam("c") c: string,
        @Body() body: any,
    ) {
        return { a, b, c, ...body };
    }

    @Get("/test/:id/:name")
    gerParamIdName(@Param("id") id: string, @Param("name") name: string) {
        return `${id} ${name}`;
    }

    @Post("/post")
    post(@Body() body: any, @QueryParam("name") name: string) {
        return body;
    }

    @Delete("/delete/:id")
    async delete(@Param("id") id: number) {
        await delay(500);
        return id;
    }
}

function delay(duration: number): Promise<void> {
    return new Promise<void>(function (resolve, reject) {
      setTimeout(function () {
        resolve();
      }, duration);
    });
}