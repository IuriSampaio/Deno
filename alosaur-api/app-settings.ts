import { AppSettings } from 'https://deno.land/x/alosaur@v0.23.0/mod.ts';
import { HomeArea } from "./areas/home/home.area.ts";
import {Log} from './middlewares/log.ts';

export const settings : AppSettings = {
    areas: [HomeArea],
    middlewares: [Log],
    logging: false,
}