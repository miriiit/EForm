import { Component, Input, OnInit } from '@angular/core';
import { EAppActions, LoadingService } from 'src/app/service/loading.service';

@Component({
  selector: 'app-loading-icon-b',
  templateUrl: './loading-icon-b.component.html',
  styleUrls: ['./loading-icon-b.component.scss']
})
export class LoadingIconBComponent implements OnInit {

  public showLoader: boolean = false;

  @Input()
  public options: TLoadingIconOptions = { textClass: '', alignClass: '', spinnerSize: '' };

  @Input()
  actionType: EAppActions = EAppActions.App;

  constructor(public loadingService: LoadingService) { }

  ngOnInit(): void {
    this.loadingService.loadingObs.subscribe(res => {
      if (res && res.action == this.actionType) {
        this.showLoader = res.status;
      }
    })
  }
}

type TLoadingIconOptions = {
  textClass?: string;
  alignClass?: string;
  spinnerSize: string
}
