import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormioCustomComponent } from '@formio/angular';

@Component({
  selector: 'dimage',
  templateUrl: './dimage.component.html',
  styleUrls: ['./dimage.component.scss']
})
export class DimageComponent implements
FormioCustomComponent<Record<string, string>>{

    @Input()
    value: Record<string, string>;
  
    @Output()
    valueChange = new EventEmitter<Record<string, string>>();
  
    @Input()
    disabled: boolean;

    @Input() 
    properties: Record<string, string>;

  constructor() {
    this.disabled = false;
    this.value = {'a': '123'};
  }
}
