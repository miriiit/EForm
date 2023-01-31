import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EAppActions, LoadingService } from 'src/app/service/loading.service';

@Component({
  selector: 'app-cstm-btn',
  templateUrl: './cstm-btn.component.html',
  styleUrls: ['./cstm-btn.component.scss']
})
export class CstmBtnComponent implements OnInit {
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

  showLoader: boolean = false;

  @Input() 
  isLoading = false;

  constructor(private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.loadingService.loadingObs.subscribe(res => {
      if (res && res.action == this.loadingAction) {
        this.showLoader = res.status;
      }
    })
  }

  onClick() {
    this.btnClick.emit();
  }
}
