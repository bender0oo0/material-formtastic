import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { News } from './news';
import { AbstractLoaderService, Definition, FormDefinition, FormFieldType, PrimaryKey } from 'material-formtastic';

@Injectable()
export class NewsLoader extends AbstractLoaderService {

  override loadValue<T extends object>(primaryKey: PrimaryKey): Observable<T> {
    return of({ id: 1, title: 'great news', text: 'Breaking news and analysis on U.S.' } as any);
  }

  override loadDefinition = <T extends object>(primaryKey?: PrimaryKey) => {
    const a = new FormDefinition<T>(defNews as any);
    return of(a);
  };
}


const defNews: Definition<News> = {
  id: {
    type: FormFieldType.NUMBER,
    span: 3,
    required: true,
    isPrimaryKey: true
  },
  title: {
    type: FormFieldType.STRING,
    required: true,
    maxLength: 100,
    span: 9
  },
  text: {
    type: FormFieldType.TEXT,
    required: true,
    maxLength: 4000,
    span: 12
  }
};

const item: any = {
  'id': 11,
  'id2': 12,
  'id3': 14,
  'name': 'bernd',
  'name2': 'bernd readonly',
  'name3': 'bernd disabled',
  'description': 'description 123',
  'description2': 'description 123 readonly',
  'description3': 'description 123 disabled',
  'color': 3,
  'color2': 1,
  'color3': [2, 3],
  'enabled2': true,
  'confirmed2': true
};
