import {Component} from '@angular/core';
import {FormDefinition, UntypedFormState} from "@material-formtastic/types";
import {Observable} from "rxjs";
import {MaterialFormtasticService} from "@material-formtastic/material-formtastic.service";
import {DemoItem} from "../helper/demo.item";
import {DemoItemLoader} from "../helper/sample-helper";

@Component({
  selector: 'app-sample-basic',
  providers: [
    DemoItemLoader,
    {
      provide: MaterialFormtasticService,
      deps: [DemoItemLoader],
    }
  ],
  templateUrl: './sample-basic.component.html',
  styleUrl: './sample-basic.component.scss'
})
export class SampleBasicComponent {

  formDef: Observable<FormDefinition<DemoItem>> | undefined;
  formState: UntypedFormState = {};

  constructor(service: MaterialFormtasticService) {
    this.formDef = service.load<DemoItem>(1);
  }


  onChanges = (x: UntypedFormState) => this.formState = x;
}
