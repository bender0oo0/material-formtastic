import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsLoader } from '../helper/news-loader.service';
import { FormDefinition, MaterialFormtasticService, UntypedFormState } from 'material-formtastic';
import { News } from '../helper/news';

@Component({
  selector: 'sample-sample-docs',
  providers: [
    NewsLoader,
    {
      provide: MaterialFormtasticService,
      deps: [NewsLoader]
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
