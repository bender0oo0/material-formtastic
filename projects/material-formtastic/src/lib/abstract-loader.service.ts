import {Observable} from "rxjs";
import {FormDefinition, PrimaryKey} from "./types";

export abstract class AbstractLoaderService {
  abstract loadDefinition<T extends object>(): Observable<FormDefinition<T>>;
  abstract loadValues<T extends object>(primaryKey: PrimaryKey): Observable<T>;
}

