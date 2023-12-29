import { Def, InternalFormField } from './types';
import {FormControl, Validators} from "@angular/forms";

export const createStyle = (x: InternalFormField): string => {
    let style = '';
    if (x.start) {
        style += `start-${x.start} `
    }

    if (x.span) {
        style += `span-${x.span} `
    }
    return style.trim();
};

export const createFields = <T extends object>(definition: Def<T>) =>
    Object.keys(definition)
        .map(x => ({
            ...definition[x as keyof T],
            field: x
        } as InternalFormField))
        .map(x => ({ ...x, ngClass: createStyle(x) }))

export const createFormControl = (x: InternalFormField) => {

  const validators = [];
  const disabled = x.disabled;

  if (x.required) {
    validators.push(Validators.required);
  }

  if (x.maxLength) {
    validators.push(Validators.maxLength(x.maxLength));
  }

  switch (x.type) {
    default:
      return new FormControl({ value: x.value, disabled }, { validators });
  }
}

