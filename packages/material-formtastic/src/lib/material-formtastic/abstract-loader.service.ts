import {Observable} from "rxjs";
import {FormDefinition, PrimaryKey} from "./types";

export abstract class AbstractLoaderService {
  abstract loadDefinition<T extends object>(primaryKey?: PrimaryKey): Observable<FormDefinition<T>>;
  abstract loadValue<T extends object>(primaryKey: PrimaryKey): Observable<T>;
}

