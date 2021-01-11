import { Area } from 'https://deno.land/x/alosaur@v0.23.0/mod.ts';
import {HomeController} from './home.controller.ts'

@Area({
    baseRoute: "/",
    controllers: [HomeController]
})
export class HomeArea {};