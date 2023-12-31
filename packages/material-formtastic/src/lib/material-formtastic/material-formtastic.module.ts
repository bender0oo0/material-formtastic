import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MaterialFormtasticComponent} from "./material-formtastic.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [MaterialFormtasticComponent],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatSlideToggleModule, MatCheckboxModule, MatIconModule],
  exports: [MaterialFormtasticComponent],
  providers: [],
})
export class MaterialFormtasticModule {
}
