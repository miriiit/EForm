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
import { IGenericResponst } from "src/app/models/generic-response.model";
import { ApiClientHelper } from "src/app/service/api-client.helper.service";
import { LoadingService } from "src/app/service/loading.service";
import { EModalType, ModalBService } from "src/app/service/modal-b.service";
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
    this.service.addForm(formData).subscribe((res) => {
      this.refreshFormList();
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

    this.router.navigate([AppConstants.ROUTES.formIo.viewFormIo, { data:  JSON.stringify(formJson)}], {relativeTo: this.activatedRoute});
    // this.modalService.open(EModalType.VIEW_FORMIO, JSON.stringify(formJson));
    // this.viewform = formJson;
  }

  deleteClick(item: any) {
    if (confirm('Are you sure??')) {
      this.service.deleteForm(item.id).subscribe(data => {
        console.log(data);
        this.refreshFormList();
      })
    }
  }

  updateForm() {

    let updateFormData = {
      id: this.FormId,
      formJson: JSON.stringify(this.form)
    };

    console.log("updateFormData : ", updateFormData);

    this.service.updateForm(updateFormData).subscribe(res => {
      console.log(res)
      this.refreshFormList();
    });

  }

  onSubmit(submission: any) {
    console.log("submission", submission); // This will print out the full submission from Form.io API.

    this.viewform.emit('submitDone')
  }

  onRenderCompleted($event) {
    // console.log("onRenderCompleted :", $event)
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
        }
      });
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