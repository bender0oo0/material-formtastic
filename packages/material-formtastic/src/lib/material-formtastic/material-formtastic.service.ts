import {Injectable} from '@angular/core';
import {AbstractLoaderService} from "./abstract-loader.service";
import {forkJoin, map, shareReplay} from "rxjs";
import {PrimaryKey} from "./types";

@Injectable()
export class MaterialFormtasticService {
  constructor(private loader: AbstractLoaderService) {
  }

  loadWithoutValue<T extends object>() {
    return this.loader.loadDefinition<T>().pipe(
      shareReplay({ refCount: true, bufferSize: 1 })
    );
  }

  load<T extends object>(primaryKey: PrimaryKey) {
    return forkJoin([this.loader.loadDefinition<T>(primaryKey), this.loader.loadValue<T>(primaryKey)]).pipe(
      map(([def, value]) => {
        def.setValues(value);
        return def;
      }),
      shareReplay({ refCount: true, bufferSize: 1 }),
    );
  }
}
