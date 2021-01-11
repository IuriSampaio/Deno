import { App } from 'https://deno.land/x/alosaur@v0.23.0/mod.ts';
import {settings} from './app-settings.ts';

const app = new App(settings);

app.listen();