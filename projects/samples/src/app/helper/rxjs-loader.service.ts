import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {FormDefinition, PrimaryKey} from '@material-formtastic/types';
import {AbstractLoaderService} from "@material-formtastic/abstract-loader.service";

@Injectable()
export class RxjsLoader extends AbstractLoaderService {

  constructor(private http: HttpClient) {
    super();
  }

  override loadValues<T extends object>(primaryKey: PrimaryKey): Observable<T> {
    return of(item);
  }

  override loadDefinition = <T extends object>() => of(new FormDefinition<T>(def));
}


const item: any = {
  "id": 11,
  "id2": 12,
  "id3": 14,
  "name": "bernd",
  "name2": "bernd readonly",
  "name3": "bernd disabled",
  "description": "description 123",
  "description2": "description 123 readonly",
  "description3": "description 123 disabled",
  "color": 3,
  "color2": 1,
  "color3": [2, 3],
  "enabled2": true,
  "confirmed2": true
};

const def: any = {
  "id": {
    "type": "number",
    "span": 2,
    "required": true,
    "isPrimaryKey": true
  },
  "id2": {
    "type": "number",
    "span": 2,
    "readonly": true
  },
  "id3": {
    "type": "number",
    "span": 2,
    "disabled": true
  },
  "name": {
    "type": "string",
    "prefix": "person",
    "span": 3,
    "start": 1,
    "maxLength": 6,
    "required": true
  },
  "name2": {
    "type": "string",
    "span": 3,
    "suffix": "person",
    "readonly": true
  },
  "name3": {
    "type": "string",
    "span": 3,
    "disabled": true
  },
  "description": {
    "type": "text",
    "span": 3,
    "start": 1,
    "maxLength": 4000
  },
  "description2": {
    "type": "text",
    "span": 3
  },
  "description3": {
    "type": "text",
    "span": 3,
    "disabled": true
  },
  "color": {
    "type": "select",
    "span": 2,
    "start": 1,
    "required": true,
    "options": [
      {"id": 1, "value": "red"},
      {"id": 2, "value": "green"},
      {"id": 3, "value": "blue"}
    ]
  },
  "color2": {
    "type": "select",
    "span": 2,
    "withEmpty": true,
    "options": [
      {"id": 1, "value": "red"},
      {"id": 2, "value": "green"},
      {"id": 3, "value": "blue"}
    ]
  },
  "color3": {
    "type": "select",
    "span": 2,
    "multiple": true,
    "options": [
      {"id": 1, "value": "red"},
      {"id": 2, "value": "green"},
      {"id": 3, "value": "blue"}
    ]
  },
  "enabled": {
    "type": "switch",
    "span": 2,
    "start": 1,
    "required": true
  },
  "enabled2": {
    "type": "switch",
    "color": "accent",
    "span": 2
  },
  "enabled3": {
    "type": "switch",
    "color": "warn",
    "span": 2
  },

  "confirmed": {
    "type": "checkbox",
    "span": 2,
    "start": 1
  },
  "confirmed2": {
    "type": "checkbox",
    "color": "accent",
    "labelPosition": "before",
    "span": 2
  },
  "confirmed3": {
    "type": "checkbox",
    "color": "warn",
    "span": 2
  }
}
