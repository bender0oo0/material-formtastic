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
  selector: 'sample-basic-empty-form',
  templateUrl: './sample-basic-empty-form.component.html',
  styleUrl: './sample-basic-empty-form.component.scss',
  providers: [
    ...createOwnBuild((forDefinition: boolean, primaryKey?: PrimaryKey) => {
      return forDefinition ? 'assets/demo-definition.json' : `assets/demo-${primaryKey}.json`;
    })
  ]
})
export class SampleBasicEmptyFormComponent {
  formDef: Observable<FormDefinition<DemoItem>> | undefined;
  formState: UntypedFormState = {};

  constructor(service: MaterialFormtasticService) {
    this.formDef = service.loadWithoutValue<DemoItem>();
  }

  onChanges = (x: UntypedFormState) => this.formState = x;
}
