import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  EventEmitter,
  OnInit,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Formio, FormBuilderComponent } from '@formio/angular';

import { FormioRefreshValue } from "@formio/angular";
import { finalize } from "rxjs/operators";
import { AppConstants } from "src/app/constants/app-constants";
import { AppService } from "src/app/service/app.service";
import { LoadingService } from "src/app/service/loading.service";
import { EModalType, ModalBService } from "src/app/service/modal-b.service";
import { ToastService } from "src/app/service/toast.service";
import { EMatchingParams } from "../../enum/matching-params.enum";

import { formioOptions } from '../model/fomio-builder.options';
import { FormioHttpService } from '../service/formio-http.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements AfterViewInit, OnInit {

  public form: any = { components: [] };
  public viewform: any = { components: [] };
  public refreshForm: EventEmitter<FormioRefreshValue> = new EventEmitter();
  options: any;

  FormId: Number;
  FormData: any;
  FormList: any = [];
  submissionData: any = { data: {} };

  headerInfo: TFormHeader = null;

  constructor(
    public service: FormioHttpService, private loadingService: LoadingService, private modalService: ModalBService,
    private toastService: ToastService,
    private appService: AppService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.options = formioOptions;
    this.form = { components: [] };
    this.viewform = { components: [] };
    this.submissionData = { data: {} };
  }

  onChange(event) {
    console.log("on change: " + event.form);
    this.refreshForm.emit({
      property: "form",
      value: event.form,
    });
  }

  ngAfterViewInit() {
    // this.prism.init();
  }

  ngOnInit(): void {
    this.refreshFormList();
    this.fetchHeaderDetail();
  }


  refreshFormList() {
    this.service.getFormList().subscribe((data) => {
      this.FormList = data;
    });
  }

  addForm() {
    let formData = JSON.stringify(this.form);
    this.loadingService.start();
    this.service.addForm(formData)
      .pipe(finalize(() => this.loadingService.stop()))
      .subscribe({
        next: res => {
          this.toastService.showSuccess(AppConstants.Text.apiWSuccess);
          this.refreshFormList();
        },
        error: () => {
          this.service.errorObs.next(true);
          this.showFailure();
        }
      });
  }


  editClick(item: any) {
    this.FormId = item.id;
    let formJson = JSON.parse(item.formJson);
    this.form = formJson;
    this.viewform = formJson;
  }


  viewClick(item: any) {
    this.FormId = item.id;
    let formJson = JSON.parse(item.formJson);
    // console.log("JSON.parse(item.formJson) : ", formJson);
    if ('components' in formJson) {
      this.parseHeaders(formJson.components, EMatchingParams.FormHeader);
    }
    this.router.navigate([AppConstants.ROUTES.formIo.viewFormIo, { data: JSON.stringify(formJson) }], { relativeTo: this.activatedRoute });
    // this.modalService.open(EModalType.VIEW_FORMIO, JSON.stringify(formJson));
    // this.viewform = formJson;
  }

  deleteClick(item: any) {
    this.modalService
      .confirm(
        "Delete Form",
        `Are you sure, you want to delete the Form ${item.id}?`
      )
      .then((confirmed) => {
        if (confirmed) {
          this.loadingService.start();
          this.service.deleteForm(item.id)
            .pipe(finalize(() => this.loadingService.stop()))
            .subscribe({
              next: res => {
                this.toastService.showSuccessDanger(AppConstants.Text.apiDeleteSuccess);
                this.refreshFormList();
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

  updateForm() {

    let updateFormData = {
      id: this.FormId,
      formJson: JSON.stringify(this.form)
    };

    // console.log("updateFormData : ", updateFormData);
    this.loadingService.start();
    this.service.updateForm(updateFormData)
      .pipe(finalize(() => this.loadingService.stop()))
      .subscribe({
        next: res => {
          this.toastService.showSuccess(AppConstants.Text.apiUpdateSuccess);
          this.refreshFormList();
        },
        error: () => {
          this.service.errorObs.next(true);
          this.showFailure();
        }
      });
  }

  onSubmit(submission: any) {
    console.log("submission", submission); // This will print out the full submission from Form.io API.
    this.viewform.emit('submitDone')
  }

  onRenderCompleted($event) {
    console.log("onRenderCompleted :", $event)
  }

  ready(event) {
    // console.log("event :", event)
    //this.viewform = event.formio;
  }

  parseHeaders(components: any[] = [], matchParam: EMatchingParams) {
    if (components && components.length) {
      for (let item of components) {
        if (item.label == matchParam) {
          this.repalaceHeaderDetail(item);
        }

        // Apply user Role Check
        if ('isDisableForUser' in item && item.isDisableForUser) {
          item['disabled'] = true;
        } else if ('isHiddenForUser' in item && item.isHiddenForUser) {
          item['hidden'] = true;
        }

      }
    }
  }

  repalaceHeaderDetail(item: {}) {
    let propObj = item["properties"];
    item["properties"] = { ...propObj, ...this.headerInfo };
    // console.log(item["properties"]);
  }


  fetchHeaderDetail() {
    this.loadingService.start();
    this.service.getFormHeaderDetail()
      .pipe(finalize(() => this.loadingService.stop()))
      .subscribe({
        next: res => {
          this.headerInfo = res.data;
          //  console.log("Response: "+ res);
        },
        error: () => {
          this.service.errorObs.next(true);
          this.showFailure();
        }
      });
  }

  showFailure() {
    this.toastService.showFailDanger(AppConstants.Text.apiFail);
  }
}

export type TFormHeader = {
  name: string,
  description: string,
  subDescription: string,
  formName?: string,
  companyName?: string,
  phoneNumber?: string,
  department?: string,
  imageUrl?: string,
  companyAddress?: string
}