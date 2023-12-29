import { Routes } from '@angular/router';
import {SampleBasicComponent} from "./sample-basic/sample-basic.component";
import {SampleBasicHttpLoaderComponent} from "./sample-basic-http-loader/sample-basic-http-loader.component";
import {SampleBasicEmptyFormComponent} from "./sample-basic-empty-form/sample-basic-empty-form.component";
import {SampleDocsComponent} from "./sample-docs/sample-docs.component";
import {SampleMatCardComponent} from "./sample-mat-card/sample-mat-card.component";

export const routes: Routes = [
  {path: 'basic', component: SampleBasicComponent},
  {path: 'basic-http', component: SampleBasicHttpLoaderComponent},
  {path: 'basic-empty', component: SampleBasicEmptyFormComponent},
  {path: 'doc-sample', component: SampleDocsComponent},
  {path: 'mat-card-sample', component: SampleMatCardComponent},
];
