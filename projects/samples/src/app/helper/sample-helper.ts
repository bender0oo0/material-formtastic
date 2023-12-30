import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {Definition, FormDefinition, FormFieldType, PrimaryKey} from '@material-formtastic/types';
import {AbstractLoaderService} from "@material-formtastic/abstract-loader.service";

export type News = {
  id: number;
  title: string;
  text: string;
}

@Injectable()
export class NewsLoader extends AbstractLoaderService {

  override loadValue<T extends object>(primaryKey: PrimaryKey): Observable<T> {
    return of({id: 1, title: 'great news', text: 'Breaking news and analysis on U.S.'} as any);
  }

  override loadDefinition = <T extends object>(primaryKey?: PrimaryKey) => {
    console.log('ah', new FormDefinition<T>(defNews as any))
    const a = new FormDefinition<T>(defNews as any);
    return of(a);
  };
}

@Injectable()
export class DemoItemLoader extends AbstractLoaderService {

  override loadValue<T extends object>(primaryKey: PrimaryKey): Observable<T> {
    return of(item);
  }

  override loadDefinition = <T extends object>(primaryKey?: PrimaryKey) => of(new FormDefinition<T>(def));
}

const defNews: Definition<News> = {
  id: {
    type: FormFieldType.NUMBER,
    span: 6,
    required: true,
    isPrimaryKey: true
  },
  title: {
    type: FormFieldType.STRING,
    required: true,
    maxLength: 100,
    span: 18
  },
  text: {
    type: FormFieldType.TEXT,
    required: true,
    maxLength: 4000,
    span: 24
  }
};

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
    "span": 4,
    "required": true,
    "isPrimaryKey": true
  },
  "id2": {
    "type": "number",
    "span": 4,
    "readonly": true
  },
  "id3": {
    "type": "number",
    "span": 4,
    "disabled": true
  },
  "name": {
    "type": "string",
    "prefix": "person",
    "span": 8,
    "start": 1,
    "maxLength": 6,
    "required": true
  },
  "name2": {
    "type": "string",
    "span": 8,
    "suffix": "person",
    "readonly": true
  },
  "name3": {
    "type": "string",
    "span": 8,
    "disabled": true
  },
  "description": {
    "type": "text",
    "span": 8,
    "start": 1,
    "maxLength": 4000
  },
  "description2": {
    "type": "text",
    "span": 8
  },
  "description3": {
    "type": "text",
    "span": 8,
    "disabled": true
  },
  "color": {
    "type": "select",
    "span": 4,
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
    "span": 4,
    "withEmpty": true,
    "options": [
      {"id": 1, "value": "red"},
      {"id": 2, "value": "green"},
      {"id": 3, "value": "blue"}
    ]
  },
  "color3": {
    "type": "select",
    "span": 4,
    "multiple": true,
    "options": [
      {"id": 1, "value": "red"},
      {"id": 2, "value": "green"},
      {"id": 3, "value": "blue"}
    ]
  },
  "enabled": {
    "type": "switch",
    "span": 4,
    "start": 1,
    "required": true
  },
  "enabled2": {
    "type": "switch",
    "color": "accent",
    "span": 4
  },
  "enabled3": {
    "type": "switch",
    "color": "warn",
    "span": 4
  },

  "confirmed": {
    "type": "checkbox",
    "span": 4,
    "start": 1
  },
  "confirmed2": {
    "type": "checkbox",
    "color": "accent",
    "labelPosition": "before",
    "span": 4
  },
  "confirmed3": {
    "type": "checkbox",
    "color": "warn",
    "span": 4
  }
}
