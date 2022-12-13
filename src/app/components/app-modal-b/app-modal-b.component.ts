import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DynamicComponentDirective } from 'src/app/directives/dynamic-component.directive';
import { AppService, TComponent } from 'src/app/service/app.service';

/****************************************************************************************************
 * Author: Muhammad Azhar Hussnain
 * Use ModalBService to open this.modalService.open(EModalType.VIEW_FORMIO, JSON.stringify(formJson));
 * Add Switch Case in ModalBService for specific component to show in modal
*****************************************************************************************************/

@Component({
  selector: 'app-modal-b',
  templateUrl: './app-modal-b.component.html',
  styleUrls: ['./app-modal-b.component.scss']
})
export class AppModalBComponent implements OnInit {

  @ViewChild(DynamicComponentDirective, {static: true}) dynamicComponentHost!: DynamicComponentDirective;

  constructor( public activeModal: NgbActiveModal, private appService: AppService) {}

  ngOnInit(): void {
    this.appService.appObservable$.subscribe({
      next: (res) => {
        if(res.action == 'add') {
          this.loadComponent(res)
        }
      }
    })
  }

  loadComponent(payload: TComponent) {
    const viewContainerRef = this.dynamicComponentHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<any>(payload.component);
    if('data' in payload)
    componentRef.instance.data = payload.data;
  }
}
