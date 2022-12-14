import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EAppActions } from 'src/app/service/loading.service';

@Component({
  selector: 'app-cstm-btn',
  templateUrl: './cstm-btn.component.html',
  styleUrls: ['./cstm-btn.component.scss']
})
export class CstmBtnComponent {
  buttonText: string = "";
  
  @Input()
  set text(name: string) {
    this.buttonText = name.toUpperCase();
  }
  get name(): string {
    return this.buttonText;
  }

  @Input() cssClass: string = '0068B4';
  @Input() type: string = 'button';
  @Output() btnClick = new EventEmitter();
  @Input() isDisabled = false;
  @Input() loadingAction: EAppActions;
  @Input() minWidth: string = "6em";

  @Input() 
  isLoading = false;

  constructor() { }

  onClick() {
    this.btnClick.emit();
  }
}
