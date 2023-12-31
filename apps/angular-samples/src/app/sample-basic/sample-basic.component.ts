import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DemoItem } from '../helper/demo.item';
import { DemoItemLoader } from '../helper/demo-item-loader.service';
import { FormDefinition, MaterialFormtasticService, UntypedFormState } from 'material-formtastic';

@Component({
  selector: 'sample-basic',
  providers: [
    DemoItemLoader,
    {
      provide: MaterialFormtasticService,
      deps: [DemoItemLoader]
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
