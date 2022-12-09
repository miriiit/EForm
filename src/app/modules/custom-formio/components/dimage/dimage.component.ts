import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormioCustomComponent } from '@formio/angular';

@Component({
  selector: 'dimage',
  templateUrl: './dimage.component.html',
  styleUrls: ['./dimage.component.scss']
})
export class DimageComponent implements
FormioCustomComponent<number>{

    @Input()
    value: number;
  
    @Output()
    valueChange = new EventEmitter<number>();
  
    @Input()
    disabled: boolean;

  constructor() {
    this.disabled = false;
    this.value = 0;
  }

}
