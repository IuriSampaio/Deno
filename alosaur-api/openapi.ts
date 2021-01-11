import { AlosaurOpenApiBuilder } from "https://deno.land/x/alosaur@v0.23.0/openapi/mod.ts"
import { settings } from "./app-settings.ts";

AlosaurOpenApiBuilder.create(settings)
  .registerControllers()
  .addServer({
    url: "http://localhost:8000",
  })
  .saveToFile("./api.json");