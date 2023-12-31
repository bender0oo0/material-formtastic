import {ChangeDetectionStrategy, Component, Input, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import {debounceTime, map, Observable, of, skipWhile, switchMap, tap} from "rxjs";
import {InternalFormField, UnknownFormDefinition, UntypedFormState, FormFieldType} from "./types";
import {FormRecord, NgForm} from "@angular/forms";
import {createFormControl} from "./helper";

@Component({
  selector: 'material-formtastic',
  templateUrl: './material-formtastic.component.html',
  styleUrl: './material-formtastic.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class MaterialFormtasticComponent {

  FormFieldType = FormFieldType;
  controls: Observable<InternalFormField[] | undefined> | undefined;
  _definition: Observable<UnknownFormDefinition | undefined> | undefined;
  _initial: { [key: string]: unknown } | undefined;

  @ViewChild('ngForm') ngForm: NgForm | undefined;

  @Output()
  form = new FormRecord({});

  @Output()
  submitForm = ($event: Event) => this.ngForm?.onSubmit($event);


  @Input()
  public set definition(value: Observable<UnknownFormDefinition | undefined> | undefined) {
    this._definition = value;
    this.controls = value?.pipe(
      map(x => x?.fields ?? []),
      tap(x => {
        for (const field of x) {
          this.form.addControl(field.field, createFormControl(field), { emitEvent: false });
        }
        this._initial = this.form.getRawValue();
      })
    );
  }

  @Output()
  changes = this.form.valueChanges.pipe(
    skipWhile(() => !this._definition),
    switchMap(x => {
      return of({
        initial: { ... this._initial },
        current: { ...x },
        isValid: this.form.valid
      } as UntypedFormState);
    }),
    debounceTime(200)
  );

  onSubmit() {
    this.form.patchValue([]);
  }
}
