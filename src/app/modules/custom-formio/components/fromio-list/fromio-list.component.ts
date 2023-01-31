import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppConstants } from 'src/app/constants/app.constant';
import { FormioConstant } from 'src/app/constants/formio.constant';
import { GridComponent } from 'src/app/modules/shared/components/grid/grid.component';
import { IFromioGrid, IGrid, IGridAction, IGridConfig } from 'src/app/modules/shared/model/grid-interface';
import { FormioGridISort } from 'src/app/modules/shared/model/sorting-interface';
import { EAppActions, LoadingService } from 'src/app/service/loading.service';
import { ModalBService } from 'src/app/service/modal-b.service';
import { ToastService } from 'src/app/service/toast.service';
import { FormioHttpService } from '../../service/formio-http.service';
import { finalize } from "rxjs/operators";
import { TGetFormIoRes } from '../view-formio/view-formio.component';

@Component({
  selector: 'app-fromio-list',
  templateUrl: './fromio-list.component.html',
  styleUrls: ['./fromio-list.component.scss']
})
export class FromioListComponent implements OnInit, IGrid, AfterViewInit {
  
  @ViewChild(GridComponent) grid: GridComponent;

  pageConfig: IGridConfig;
  gridObj: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private modalService: ModalBService,
    private loadingService: LoadingService,
    private toastService: ToastService,
    private service: FormioHttpService) {}

  ngOnInit() {
    this.pageConfig = IFromioGrid.configurations;
    this.gridObj = FormioConstant.GridObj;
  }

  reqGridContent(params: any = {}) {
    this.grid.prepareGridApi(
      AppConstants.Form_Get_Listing,
      FormioGridISort.SORT,
      params
    );
  }
  
  ngAfterViewInit(): void {
    if (this.grid) {
      Promise.resolve(1).then(() => {
        this.reqGridContent();
      })
    }
  }

  updatedObj(payload: IGridAction) {
    if(payload) {
      let action = payload.action;
      if(action == EAppActions.GridActionEnableViewRow) {
        this.router.navigate(['../'+AppConstants.ROUTES.FormIo.view.relativePath, {id: payload.data.id}]);
        // this.router.navigate(['../'+AppConstants.ROUTES.FormIo.view.relativePath, {id: payload.data.id}], { relativeTo: this.activatedRoute });
      }else if(action == EAppActions.GridActionEnableDeleteRow) {
        this.deleteClick(payload.data);
      }else if(action == EAppActions.GridActionEnableEditBuilder) {
        this.navigateToFormBuilder(payload.data);
      }
    }
    // throw new Error('Method not implemented.');
  }

  deleteClick(item: TGetFormIoRes) {
    this.modalService
      .confirm(
        "Delete Form",
        `Are you sure, you want to delete the Form ${item.id}?`
      )
      .then((confirmed) => {
        if (confirmed) {
          this.loadingService.start(EAppActions.App);
          this.service.deleteForm(item.id)
            .pipe(finalize(() => this.loadingService.stop(EAppActions.App)))
            .subscribe({
              next: res => {
                this.toastService.showSuccessDanger(AppConstants.Text.apiDeleteSuccess);
                this.reqGridContent();
                // this.appService.scrollToTop();
              },
              error: () => {
                this.service.errorObs.next(true);
                this.showFailure();
              }
            })
        }
      })
      .catch();
  }

  openRecordDetailPage(data: any) {
    throw new Error('Method not implemented.');
  }

  updateStatus(payload: any) {
    throw new Error('Method not implemented.');
  }
  
  popupClickHandler(data: any) {
    throw new Error('Method not implemented.');
  }

  showFailure() {
    this.toastService.showFailDanger(AppConstants.Text.apiFail);
  }

  navigateToFormBuilder(item: TGetFormIoRes) {
    this.router.navigate(['../'+AppConstants.ROUTES.FormIo.builder.relativePath, {id: item.id}])
  }
}
