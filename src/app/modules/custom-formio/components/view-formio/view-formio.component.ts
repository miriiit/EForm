import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormioRefreshValue } from '@formio/angular';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-view-formio',
  templateUrl: './view-formio.component.html',
  styleUrls: ['./view-formio.component.scss']
})
export class ViewFormioComponent implements OnInit {

  @Input()
  data: any = null;

  public viewform: any = { components: [] };
  public refreshForm: EventEmitter<FormioRefreshValue> = new EventEmitter();

  submissionData: any = { data: {} };
  
  constructor(  private activatedRoute: ActivatedRoute) {}

  ngOnInit() {

    if(!this.data){
      this.data  = this.activatedRoute.snapshot.paramMap.get('data');
    }

    this.viewform =  JSON.parse(this.data);
    this.submissionData = { data: {} };
  }

  onRenderCompleted($event) {
    console.log("onRenderCompleted :", $event)
  }

  onSubmit(submission: any) {
    console.log("submission", submission); // This will print out the full submission from Form.io API.
    this.viewform.emit('submitDone')
  }

  ready(event) {
    console.log("event :", event)
    //this.viewform = event.formio;
  }
}
