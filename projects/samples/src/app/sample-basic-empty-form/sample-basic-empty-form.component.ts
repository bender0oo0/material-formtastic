import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {FormDefinition, FormState, PrimaryKey} from "../../../../material-formtastic/src/lib/types";
import {DemoItem} from "../helper/demo.item";
import {MaterialFormtasticService} from "../../../../material-formtastic/src/lib/material-formtastic.service";
import {createOwnBuild, HttpLoaderEndpointToken, HttpLoaderService} from "@material-formtastic/http-loader.service";

@Component({
  selector: 'app-sample-basic-empty-form',
  templateUrl: './sample-basic-empty-form.component.html',
  styleUrl: './sample-basic-empty-form.component.scss',
  providers: [
    ... createOwnBuild((forDefinition: boolean, primaryKey?: PrimaryKey) => {
      return !forDefinition ? 'assets/demo-1.json' : 'assets/demo-definition.json';
    })
  ],
})
export class SampleBasicEmptyFormComponent {
  formDef: Observable<FormDefinition<DemoItem>> | undefined;
  formState: FormState<DemoItem> = {};

  constructor(service: MaterialFormtasticService) {
    this.formDef = service.loadWithoutValue<DemoItem>();
  }

  onChanges = (x: FormState<DemoItem>) => this.formState = x;
}
