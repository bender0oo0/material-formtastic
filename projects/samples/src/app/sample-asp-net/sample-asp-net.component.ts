import { Component } from '@angular/core';
import {FormDefinition, FormState} from "@material-formtastic/types";
import {News} from "../helper/sample-helper";
import {MaterialFormtasticService} from "@material-formtastic/material-formtastic.service";
import {Observable} from "rxjs";
import {createDefaultBuild} from "@material-formtastic/http-loader.service";

@Component({
  selector: 'sample-sample-asp-net',
  templateUrl: './sample-asp-net.component.html',
  providers: [
    ... createDefaultBuild("/api/news"),
  ],
  styleUrl: './sample-asp-net.component.scss'
})
export class SampleAspNetComponent {

  formDef: Observable<FormDefinition<News>> | undefined;
  formState: FormState<News> = {};

  constructor(service: MaterialFormtasticService) {
    this.formDef = service.load<News>(1);
  }

  onChanges = (x: FormState<News>) => this.formState = x;
}