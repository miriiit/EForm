import { Injector } from '@angular/core'
import {
  FormioCustomComponentInfo,
  registerCustomFormioComponent
} from '@formio/angular';

import { UserFormHeaderComponent } from '../components/user-form-header/user-form.header.component';

const COMPONENT_OPTIONS: FormioCustomComponentInfo = {
  type: 'formHeader', // custom type. Formio will identify the field with this type.
  selector: 'form-header', // custom selector. Angular Elements will create a custom html tag with this selector
  title: 'Form Header', // Title of the component
  group: 'custom', // Build Group
  icon: 'check-circle', // Icon
  fieldOptions: ['label', 'values', 'key'],
  // editForm: imageEditForm, // Use editForm from Radio buttons
  //  template: 'input', // Optional: define a template for the element. Default: input
  //  changeEvent: 'valueChange', // Optional: define the changeEvent when the formio updates the value in the state. Default: 'valueChange',
  //  documentation: '', // Optional: define the documentation of the field
  //  weight: 0, // Optional: define the weight in the builder group
  schema: { label: 'formHeader', key: 'formHeader', hideLabel: true }, // Optional: define extra default schema for the field
  // extraValidators: [], // Optional: define extra validators  for the field
  emptyValue: {} // Optional: the emptyValue of the field
}

export function registerFormHeader(injector: Injector) {
  registerCustomFormioComponent(COMPONENT_OPTIONS, UserFormHeaderComponent, injector)
}