import {Inject, Injectable, InjectionToken} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Def, FormDefinition, PrimaryKey} from "./types";
import {AbstractLoaderService} from "./abstract-loader.service";
import {MaterialFormtasticService} from "./material-formtastic.service";

export class HttpLoaderEndpoint {
  url?: string;
  build = (primaryKey?: PrimaryKey) => primaryKey ? `${this.url}/id` : `${this.url}/head/id`;
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
    return this.http.get<Def<T>>(url).pipe(
      map(x => new FormDefinition<T>(x)),
    );
  }
}
