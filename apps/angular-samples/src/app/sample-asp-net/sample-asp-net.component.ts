import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { createDefaultBuild, FormDefinition, MaterialFormtasticService, UntypedFormState } from 'material-formtastic';
import { News } from '../helper/news';

@Component({
  selector: 'sample-asp-net',
  templateUrl: './sample-asp-net.component.html',
  providers: [
    ...createDefaultBuild('/api/news')
  ],
  styleUrl: './sample-asp-net.component.scss'
})
export class SampleAspNetComponent {

  formDef: Observable<FormDefinition<News>> | undefined;
  formState: UntypedFormState = {};

  constructor(service: MaterialFormtasticService) {
    this.formDef = service.load<News>(1);
  }

  onChanges = (x: UntypedFormState) => this.formState = x;
}
