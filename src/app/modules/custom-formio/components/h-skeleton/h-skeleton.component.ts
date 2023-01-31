import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormioCustomComponent } from '@formio/angular';

@Component({
  selector: 'app-h-skeleton',
  templateUrl: './h-skeleton.component.html',
  styleUrls: ['./h-skeleton.component.scss']
})
export class HSkeletonComponent implements
  FormioCustomComponent<Record<string, boolean>>{

  @Input()
  value: Record<string, boolean>;

  @Output()
  valueChange = new EventEmitter<Record<string, boolean>>();

  @Input()
  disabled: boolean;

  @Input()
  properties: Record<string, string>;

  constructor() {
    this.disabled = false;
    this.value = { 'a': true };
  }

  updateValue(key: string, event: any) {
    let value = event.target.checked;
    this.value[key] = value;
    this.valueChange.emit(this.value);
  }

}