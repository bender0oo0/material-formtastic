import {Inject, Injectable, InjectionToken} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Definition, FormDefinition, PrimaryKey} from "./types";
import {AbstractLoaderService} from "./abstract-loader.service";
import {MaterialFormtasticService} from "./material-formtastic.service";

export class HttpLoaderEndpoint {
  url?: string;
  build = (primaryKey?: PrimaryKey) => primaryKey ? `${this.url}/${primaryKey}` : `${this.url}/options`;
}

export const HttpLoaderEndpointToken = new InjectionToken<HttpLoaderEndpoint>('CCC', {
  factory: () => new HttpLoaderEndpoint(),
});

export const createOwnBuild = (build: (primaryKey: PrimaryKey) => string) => {
  return [
    {
      provide: HttpLoaderEndpointToken,
      useValue: {build}
    },
    HttpLoaderService,
    {
      provide: MaterialFormtasticService,
      deps: [HttpLoaderService],
    }
  ]
}


export const createDefaultBuild = (url: string) => {
  return [
    {
      provide: HttpLoaderEndpointToken,
      useFactory: () => {
        const e = new HttpLoaderEndpoint();
        e.url = url;
        return e;
      }
    },
      HttpLoaderService,
    {
      provide: MaterialFormtasticService,
      deps: [HttpLoaderService],
    }
  ]
}

@Injectable()
export class HttpLoaderService extends AbstractLoaderService {

  constructor(private http: HttpClient, @Inject(HttpLoaderEndpointToken) private endpoint: HttpLoaderEndpoint) {
    super();
  }

  override loadValues<T extends object>(primaryKey: PrimaryKey): Observable<T> {
    const url = this.endpoint.build(primaryKey);
    return this.http.get<T>(url);
  }

  override loadDefinition<T extends object>() {
    const url = this.endpoint.build();
    return this.http.get<Definition<T>>(url).pipe(
      map(x => new FormDefinition<T>(x)),
    );
  }
}
