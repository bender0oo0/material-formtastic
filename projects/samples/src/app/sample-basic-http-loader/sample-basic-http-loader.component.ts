import {Component, Injectable} from '@angular/core';
import {last, Observable} from "rxjs";
import {FormDefinition, FormState, PrimaryKey} from "@material-formtastic/types";
import {MaterialFormtasticService} from "@material-formtastic/material-formtastic.service";
import {DemoItem} from "../helper/demo.item";
import {createOwnBuild} from "@material-formtastic/http-loader.service";
@Component({
  selector: 'app-sample-basic-http-loader',
  providers: [
    ... createOwnBuild((forDefinition: boolean, primaryKey?: PrimaryKey) => {
      return !forDefinition ? 'assets/demo-1.json' : 'assets/demo-definition.json';
    })
  ],
  templateUrl: './sample-basic-http-loader.component.html',
  styleUrl: './sample-basic-http-loader.component.scss'
})
export class SampleBasicHttpLoaderComponent {
  formDef: Observable<FormDefinition<DemoItem>> | undefined;
  formState: FormState<DemoItem> = {};

  constructor(service: MaterialFormtasticService) {
    this.formDef = service.load<DemoItem>(1);
  }

  onChanges = (x: FormState<DemoItem>) => this.formState = x;
}
