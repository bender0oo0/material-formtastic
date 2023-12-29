import {Injectable} from '@angular/core';
import {AbstractLoaderService} from "./abstract-loader.service";
import {forkJoin, map} from "rxjs";
import {PrimaryKey} from "./types";

@Injectable()
export class MaterialFormtasticService {
  constructor(private loader: AbstractLoaderService) {
  }

  load<T extends object>(primaryKey?: PrimaryKey) {

    if (primaryKey === undefined) {
      return this.loader.loadDefinition<T>();
    }

    return forkJoin([this.loader.loadDefinition<T>(), this.loader.loadValues<T>(primaryKey)]).pipe(
      map(([def, value]) => {
        def.setValues(value);
        return def;
      })
    );
  }
}
