import {Component} from '@angular/core';
import {FormDefinition, FormState} from "@material-formtastic/types";
import {Observable} from "rxjs";
import {MaterialFormtasticService} from "@material-formtastic/material-formtastic.service";
import {RxjsLoader} from "../helper/rxjs-loader.service";
import {DemoItem} from "../helper/demo.item";

@Component({
  selector: 'app-sample-basic',
  providers: [
    RxjsLoader,
    {
      provide: MaterialFormtasticService,
      deps: [RxjsLoader],
    }
  ],
  templateUrl: './sample-basic.component.html',
  styleUrl: './sample-basic.component.scss'
})
export class SampleBasicComponent {

  formDef: Observable<FormDefinition<DemoItem>> | undefined;
  formState: FormState<DemoItem> = {};

  constructor(service: MaterialFormtasticService) {
    this.formDef = service.load<DemoItem>(1);
  }

  onChanges = (x: FormState<DemoItem>) => this.formState = x;
}
