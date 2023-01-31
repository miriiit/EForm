
import {
  Component,
  AfterViewInit,
  EventEmitter,
  OnInit,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Formio, FormBuilderComponent } from '@formio/angular';

import { FormioRefreshValue } from "@formio/angular";
import { finalize } from "rxjs/operators";
import { AppConstants } from "src/app/constants/app.constant";
import { AppService } from "src/app/service/app.service";
import { EAppActions, LoadingService } from "src/app/service/loading.service";
import { ModalBService } from "src/app/service/modal-b.service";
import { ToastService } from "src/app/service/toast.service";
import { EMatchingParams } from "../../../shared/enum/matching-params.enum";
import { ViewFormioComponent } from "../../components/view-formio/view-formio.component";

import { formioOptions } from '../../model/fomio-builder.options';
import { FormioHttpService } from '../../service/formio-http.service';

@Component({
  selector: 'app-fromio-builder',
  templateUrl: './formio-builder.component.html',
  styleUrls: ['./formio-builder.component.scss']
})
export class FormioBuilderComponent implements AfterViewInit, OnInit {

  public form: any = { components: [] };
  public viewform: any = { components: [] };
  public refreshForm: EventEmitter<FormioRefreshValue> = new EventEmitter();
  options: any;

  FormId: string;
  FormData: any;
  FormList: any = [];
  submissionData: any = { data: {} };

  headerInfo: TFormHeader = null;


  //Loader Variables
  loadingAddFormIo: EAppActions = EAppActions.AddFormIo;
  loadingUpdateFormIo: EAppActions = EAppActions.UpdateFormIo;

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

    let appendFrom: boolean = false;
    if (!this.FormId) {
      this.FormId = this.activatedRoute.snapshot.paramMap.get('id');
      appendFrom = true
    }

    this.refreshFormList(appendFrom);
    this.fetchHeaderDetail();
  }


  refreshFormList(isAppendFrom: boolean = false) {
    this.service.getFormList().subscribe((data) => {
      this.FormList = data;
      if(isAppendFrom) {
        this.appendFromToBuilder();
      }
    });
  }

  appendFromToBuilder() {
    if(this.FormId) {
      let item = this.FormList.find(item => item.id == this.FormId);
      if(item) {
        this.form =  JSON.parse(item.formJson);
      }
    }
  }

  addForm() {
    this.loadingService.start(EAppActions.AddFormIo);
    if (!this.validateFormSave()) {
      this.loadingService.stop(EAppActions.AddFormIo);
      this.showFailure();
      return false;
    }
    let formData = JSON.stringify(this.form);
    if (formData) {
      this.service.addForm(formData)
        .pipe(finalize(() => this.loadingService.stop(EAppActions.AddFormIo)))
        .subscribe({
          next: res => {
            this.toastService.showSuccess(AppConstants.Text.apiWSuccess+' Form ID: '+ res.id);
            this.refreshFormList();
          },
          error: () => {
            this.service.errorObs.next(true);
            this.showFailure();
          }
        });
    } else {
      this.showFailure();
    }
  }


  editClick(item: any) {
    this.FormId = item.id;
    let formJson = JSON.parse(item.formJson);
    this.form = formJson;
    this.viewform = formJson;
    this.appService.scrollToTop();
  }


  viewClick(item: any) {
    this.FormId = item.id;
    let formJson = JSON.parse(item.formJson);
    // console.log("JSON.parse(item.formJson) : ", formJson);
    if ('components' in formJson) {
      this.parseComponents(formJson.components, EMatchingParams.FormHeader);
    }
    
    this.router.navigate(['../'+AppConstants.ROUTES.FormIo.view.path, {id: this.FormId}], { relativeTo: this.activatedRoute });
    // this.router.navigate([AppConstants.ROUTES.formIo.viewFormIo, { data: JSON.stringify(formJson) }], { relativeTo: this.activatedRoute });
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
          this.loadingService.start(EAppActions.App);
          this.service.deleteForm(item.id)
            .pipe(finalize(() => this.loadingService.stop(EAppActions.App)))
            .subscribe({
              next: res => {
                this.toastService.showSuccessDanger(AppConstants.Text.apiDeleteSuccess);
                this.refreshFormList();
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

  updateForm() {

    if (this.form) {
      let updateFormData = {
        id: this.FormId,
        formJson: JSON.stringify(this.form)
      };

      // console.log("updateFormData : ", updateFormData);
      this.loadingService.start(EAppActions.UpdateFormIo);
      this.service.updateForm(updateFormData)
        .pipe(finalize(() => this.loadingService.stop(EAppActions.UpdateFormIo)))
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
    } else {
      this.showFailure();
    }
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

  parseComponents(components: any[] = [], matchParam: EMatchingParams) {
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
    this.loadingService.start(EAppActions.App);
    this.service.getFormHeaderDetail()
      .pipe(finalize(() => this.loadingService.stop(EAppActions.App)))
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

  validateFormSave(): boolean {
    let status = false;
    if (this.form.components) {
      if (this.form.components.length) {
        if (this.form.components.length == 1) {
          for (let item of this.form.components) {
            if (item.key && item.key == 'submit') {
              status = false;
            }
          }
        } else {
          status = true;
        }
      } else {
        status = false;
      }
    }
    return status;
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