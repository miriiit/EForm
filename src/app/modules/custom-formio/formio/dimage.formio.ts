import { Injector } from '@angular/core'
import {
  FormioCustomComponentInfo,
  registerCustomFormioComponent
} from '@formio/angular';

import formioJson from '../../../../assets/json/formio.json';
import { DimageComponent } from '../components/dimage/dimage.component';


function imageEditForm() {
  // Base form is created from
  // console.log(JSON.stringify(Components.components.selectboxes.editForm()))
  // Get the output from the console, format it with Notepad++ Tools/JSTool/JSFormat
  // and store it as a file in ../../assets.
  // Make changes to your Edit form
  // Before deployment, compact JSON file with Notepad++ Tools/JSToool/JSMin
  return formioJson
}

const COMPONENT_OPTIONS: FormioCustomComponentInfo = {
  type: 'dimage', // custom type. Formio will identify the field with this type.
  selector: 'd-image', // custom selector. Angular Elements will create a custom html tag with this selector
  title: 'D Image', // Title of the component
  group: 'custom', // Build Group
  icon: 'check-circle', // Icon
  fieldOptions: ['label', 'values', 'key'],
  // editForm: imageEditForm, // Use editForm from Radio buttons
  //  template: 'input', // Optional: define a template for the element. Default: input
//  changeEvent: 'valueChange', // Optional: define the changeEvent when the formio updates the value in the state. Default: 'valueChange',
//  documentation: '', // Optional: define the documentation of the field
//  weight: 0, // Optional: define the weight in the builder group
//  schema: {}, // Optional: define extra default schema for the field
//  extraValidators: [], // Optional: define extra validators  for the field
emptyValue: {} // Optional: the emptyValue of the field
}

export function registerDimageComponent(injector: Injector) {
  registerCustomFormioComponent(COMPONENT_OPTIONS, DimageComponent, injector)
}