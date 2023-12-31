import {Inject, Injectable, InjectionToken} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Definition, FormDefinition, PrimaryKey} from "./types";
import {AbstractLoaderService} from "./abstract-loader.service";
import {MaterialFormtasticService} from "./material-formtastic.service";

export class HttpLoaderEndpoint {
  url?: string;
  build = (forDefinition: boolean, primaryKey?: PrimaryKey) => {
    let url = forDefinition ? `${this.url}/options` : `${this.url}`;
    if (primaryKey) {
      url = `${url}/${primaryKey}`;
    }
    return url;
  };
}

export const HttpLoaderEndpointToken = new InjectionToken<HttpLoaderEndpoint>('HttpLoaderEndpointToken', {
  factory: () => new HttpLoaderEndpoint(),
});

export const createOwnBuild = (build: (forDefinition: boolean, primaryKey?: PrimaryKey) => string) => {
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

  override loadValue<T extends object>(primaryKey: PrimaryKey): Observable<T> {
    const url = this.endpoint.build(false, primaryKey);
    return this.http.get<T>(url);
  }

  override loadDefinition<T extends object>(primaryKey?: PrimaryKey) {
    const url = this.endpoint.build(true, primaryKey);
    return this.http.get<Definition<T>>(url).pipe(
      map(x => new FormDefinition<T>(x)),
    );
  }
}
