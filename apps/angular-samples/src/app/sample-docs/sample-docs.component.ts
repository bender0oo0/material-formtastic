import {Component} from '@angular/core';
import {FormDefinition, UntypedFormState} from "@material-formtastic/types";
import {MaterialFormtasticService} from "@material-formtastic/material-formtastic.service";
import {Observable} from "rxjs";
import {News, NewsLoader} from "../helper/sample-helper";

@Component({
  selector: 'sample-sample-docs',
  providers: [
    NewsLoader,
    {
      provide: MaterialFormtasticService,
      deps: [NewsLoader],
    }
  ],
  templateUrl: './sample-docs.component.html',
  styleUrl: './sample-docs.component.scss'
})
export class SampleDocsComponent {

  formDef: Observable<FormDefinition<News>> | undefined;
  formState: UntypedFormState = {};

  constructor(service: MaterialFormtasticService) {
    this.formDef = service.load<News>(1);
  }

  onChanges = (x: UntypedFormState) => this.formState = x;
}
