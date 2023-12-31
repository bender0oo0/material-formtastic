import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsLoader } from '../helper/news-loader.service';
import { FormDefinition, MaterialFormtasticService, UntypedFormState } from 'material-formtastic';
import { News } from '../helper/news';

@Component({
  selector: 'sample-mat-card',
  templateUrl: './sample-mat-card.component.html',
  providers: [
    NewsLoader,
    {
      provide: MaterialFormtasticService,
      deps: [NewsLoader]
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
