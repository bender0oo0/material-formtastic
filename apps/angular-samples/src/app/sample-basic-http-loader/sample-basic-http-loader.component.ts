import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DemoItem } from '../helper/demo.item';
import {
  createOwnBuild,
  FormDefinition,
  MaterialFormtasticService,
  PrimaryKey,
  UntypedFormState
} from 'material-formtastic';

@Component({
  selector: 'sample-basic-http-loader',
  providers: [
    ...createOwnBuild((forDefinition: boolean, primaryKey?: PrimaryKey) => {
      return forDefinition ? 'assets/demo-definition.json' : `assets/demo-${primaryKey}.json`;
    })
  ],
  templateUrl: './sample-basic-http-loader.component.html',
  styleUrl: './sample-basic-http-loader.component.scss'
})
export class SampleBasicHttpLoaderComponent {
  formDef: Observable<FormDefinition<DemoItem>> | undefined;
  formState: UntypedFormState = {};

  constructor(service: MaterialFormtasticService) {
    this.formDef = service.load<DemoItem>(1);
  }

  onChanges = (x: UntypedFormState) => this.formState = x;
}
