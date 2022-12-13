import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject } from 'rxjs';
import { AppModalBComponent } from '../components/app-modal-b/app-modal-b.component';
import { ConfirmModalComponent } from '../components/modals/confirm-modal-b/confirm-modal-b.component';
import { ViewFormioComponent } from '../modules/custom-formio/components/view-formio/view-formio.component';
import { AppService } from './app.service';

@Injectable({
    providedIn: 'root'
})
export class ModalBService {

    constructor(private modalService: NgbModal, private appService: AppService) { }

    open(action: EModalType, data: any) {
        switch(action) {
            case EModalType.VIEW_FORMIO:
                this.appService.loadComponent({component: ViewFormioComponent, action: 'add', 'data': data});
                const modalRef = this.modalService.open(AppModalBComponent, { size: 'xl', scrollable: true });
                // modalRef.componentInstance.name = 'World';
            break;
        }
    }

    public confirm(
        title: string,
        message: string,
        btnOkText: string = 'OK',
        btnCancelText: string = 'Cancel',
        dialogSize: 'sm' | 'md' | 'lg' = 'sm'): Promise<boolean> {
        const modalRef = this.modalService.open(ConfirmModalComponent, { size: dialogSize, scrollable: false });
        modalRef.componentInstance.title = title;
        modalRef.componentInstance.message = message;
        modalRef.componentInstance.btnOkText = btnOkText;
        modalRef.componentInstance.btnCancelText = btnCancelText;
        return modalRef.result;
    }
}

export enum EModalType {
    VIEW_FORMIO = 'view-form-io'
}