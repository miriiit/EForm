import { Component, Input } from '@angular/core';
import { LoadingService } from 'src/app/service/loading.service';

@Component({
  selector: 'app-loading-icon-b',
  templateUrl: './loading-icon-b.component.html',
  styleUrls: ['./loading-icon-b.component.scss']
})
export class LoadingIconBComponent {
  
  @Input()
  public options: TLoadingIconOptions = {textClass: '', alignClass: ''}

  constructor(public loadingService: LoadingService){}
}

type TLoadingIconOptions = {
   textClass?: string;
   alignClass: string;
}
