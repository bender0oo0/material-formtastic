import {Component} from '@angular/core';
import {FormDefinition, UntypedFormState} from "@material-formtastic/types";
import {News, NewsLoader} from "../helper/sample-helper";
import {MaterialFormtasticService} from "@material-formtastic/material-formtastic.service";
import {Observable} from "rxjs";

@Component({
  selector: 'sample-sample-mat-card',
  templateUrl: './sample-mat-card.component.html',
  providers: [
    NewsLoader,
    {
      provide: MaterialFormtasticService,
      deps: [NewsLoader],
    }
  ],
  styleUrl: './sample-mat-card.component.scss'
})
export class SampleMatCardComponent {

  formDef: Observable<FormDefinition<News>> | undefined;
  formState: UntypedFormState = {};

  constructor(service: MaterialFormtasticService) {
    this.formDef = service.load<News>(1);
  }

  onChanges = (x: UntypedFormState) => this.formState = x;
}
