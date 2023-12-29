import {Component, Input} from '@angular/core';
import {FormDefinition, FormState} from "@material-formtastic/types";
import {Observable} from "rxjs";
import {DemoItem} from "../helper/demo.item";

@Component({
  selector: 'sample-debug',
  templateUrl: './debug.component.html',
  styleUrl: './debug.component.scss'
})
export class DebugComponent {
  @Input() formState: FormState<DemoItem> | undefined;
  @Input() formDef: Observable<FormDefinition<DemoItem>> | undefined;
}
