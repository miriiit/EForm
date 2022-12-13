import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DynamicComponentDirective } from 'src/app/directives/dynamic-component.directive';
import { AppService, TComponent } from 'src/app/service/app.service';

/****************************************************************************************************
 * Author: Muhammad Azhar Hussnain
 * Use ModalBService to open this.modalService.confirm()
*****************************************************************************************************/

@Component({
  selector: 'app-confirm-modal-b',
  templateUrl: './confirm-modal-b.component.html',
  styleUrls: ['./confirm-modal-b.component.scss']
})
export class ConfirmModalComponent implements OnInit {

  @Input() title: string;
  @Input() message: string;
  @Input() btnOkText: string;
  @Input() btnCancelText: string;

  constructor(public activeModal: NgbActiveModal) { }
  
  ngOnInit(): void {
    
  }

  public decline() {
    this.activeModal.close(false);
  }

  public accept() {
    this.activeModal.close(true);
  }

  public dismiss() {
    this.activeModal.dismiss();
  }
}
