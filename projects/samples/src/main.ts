import {AppModule} from "./app/app.module";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {ViewEncapsulation} from "@angular/core";


platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    defaultEncapsulation: ViewEncapsulation.None
  })
  .catch((err) => console.error(err));
