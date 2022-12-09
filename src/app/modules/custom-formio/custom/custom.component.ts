import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  EventEmitter,
  OnInit,
} from "@angular/core";

import { Formio, FormBuilderComponent } from '@formio/angular';

import { FormioRefreshValue } from "@formio/angular";
import { PrismService } from 'src/app/service/Prism.service';

import { formioOptions } from '../model/fomio-builder.options';
import { FormioHttpService } from '../service/formio-http.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements AfterViewInit, OnInit {

  public form: any = {components: []};
  public refreshForm: EventEmitter<FormioRefreshValue> = new EventEmitter();
  public viewform: any = {components: []};
  options: any;

  FormId: Number;
  FormData: any;
  FormList: any = [];
  submissionData: any = { data: {} };

  constructor(
    public service: FormioHttpService) {
    this.options = formioOptions;
    this.form = { components: [] };
    this.viewform = { components: [] };
    this.submissionData = { data: {} };
  }

  onChange(event) {
    console.log("on change: "+ event.form);
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
  }


  refreshFormList() {
    this.service.getFormList().subscribe((data) => {
      this.FormList = data;
    });
  }

  addForm() {
    let formData = JSON.stringify(this.form);
    console.log("Form: "+ formData);
    return;
    this.service.addForm(formData).subscribe((res) => {
      this.refreshFormList();
    });
  }


  editClick(item: any) {
    this.FormId = item.id;
    this.form = JSON.parse(item.formJson);
  }


  viewClick(item: any) {
    this.FormId = item.id;

    console.log("JSON.parse(item.formJson) : ", JSON.parse(item.formJson));

    this.viewform = JSON.parse(item.formJson);
  }

  deleteClick(item: any) {
    if (confirm('Are you sure??')) {
      this.service.deleteForm(item.id).subscribe(data => {
        console.log(data)
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
    console.log("onRenderCompleted :", $event)
  }

  ready(event) {
    console.log("event :", event)
    //this.viewform = event.formio;
  }
}
