import {createFields} from './helper';

export type PrimaryKey = string | number;

export type Definition<T extends object> = {
  [K in keyof T]: FormInputField | FormSelectField;
};

export class FormDefinition<T extends object> {

  fields: InternalFormField[];
  primaryKey: PrimaryKey | undefined;

  constructor(private definition: Definition<T>) {
    this.fields = createFields<T>(this.definition);
  }

  setValues(item: T) {
    for (const field of this.fields) {
      const key = field.field as keyof T;
      if (Object.hasOwn(item, key)) {
        field.value = item[key];
        if (field.isPrimaryKey && (typeof field.value === "number" || typeof field.value === "string")) {
          this.primaryKey = field.value;
        }
      }
    }
  }
}

export class UnknownFormDefinition extends FormDefinition<object> {}

export type InternalFormField = FormInputField & FormCheckboxField & FormSelectField & {
  field: string;
  ngClass: string;
}

export type Field = {
  isPrimaryKey?: boolean;
  type: FormFieldType;
  value?: unknown;
}

export type FormInputField = Field & FormFieldStyle & FormFieldValidation;

export type FormCheckboxField = Field & {
  labelPosition?: 'before' | 'after',
}

export type FormSelectField = Field & {
  withEmpty?: boolean,
  multiple?: boolean,
  options?: FormSelectOption[];
}

export type FormSelectOption = {
  id: string | number;
  value: string | number;
}

export type FormFieldValidation = {
  maxLength?: number;
  required?: boolean;
  readonly?: boolean;
  disabled?: boolean;
}

export type FormFieldStyle = {
  start?: number;
  span?: number;
  color?: FieldStyleColor;
  prefix?: string;
  suffix?: string;
}

export enum FormFieldType {
  STRING = 'string',
  NUMBER = 'number',
  TEXT = 'text',
  SELECT = 'select',
  SWITCH = 'switch',
  CHECKBOX = 'checkbox',
}

export enum FieldStyleColor {
  primary = 'primary',
  accent = 'accent',
  warn = 'warn'
}

export type UntypedFormState = FormState<unknown>;

export type FormState<T> = {
  initial?: T;
  current?: T;
  isValid?: boolean;
};
