import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormioRefreshValue } from '@formio/angular';
import { AppConstants } from 'src/app/constants/app-constants';
import { AppService } from 'src/app/service/app.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { EModalType, ModalBService } from 'src/app/service/modal-b.service';

@Component({
  selector: 'app-view-formio',
  templateUrl: './view-formio.component.html',
  styleUrls: ['./view-formio.component.scss']
})
export class ViewFormioComponent implements OnInit {

  @Input()
  data: any = null;

  public formId: string = "";

  public viewform: any = { components: [] };
  public refreshForm: EventEmitter<FormioRefreshValue> = new EventEmitter();

  submissionData: any = { data: {} };

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private storageService: LocalStorageService,
    private appService: AppService,
    private modalService: ModalBService) { }

  ngOnInit() {

    // Receiving data from router params
    // if(!this.data){
    //   this.data  = this.activatedRoute.snapshot.paramMap.get('data');
    // }
    // this.viewform =  JSON.parse(this.data);

    this.submissionData = { data: {} };
    this.subscribeAppService();
  }

  subscribeAppService(): void {
    this.appService.appObservable$.subscribe(res => {
      if (res && res.action == 'payload' && res.data) {
        this.viewform = JSON.parse(res.data.formio);
        this.formId = res.data.formId;

        let submission = this.storageService.get(this.formId, true);
        if (submission) {
          this.submissionData = submission;
        }

      }
    });
  }

  onRenderCompleted($event) {
    console.log("onRenderCompleted :", $event)
  }

  onSubmit(submission: any) {
    console.log("submission", submission); // This will print out the full submission from Form.io API.;

    this.storageService.save(this.formId, submission, true);
    this.viewform.emit('submitDone');
  }

  ready(event) {
    console.log("event :", event)
    //this.viewform = event.formio;
  }

  viewSubmissionData() {
    this.modalService.open(EModalType.ViewFormIoSubmissionData, {title: `Form: ${this.formId} Submission Data`, json: JSON.stringify(this.submissionData)});
  }

  navigateToFormBuilder() {
    this.router.navigate([AppConstants.ROUTES.formIo.builder])
  }
}
