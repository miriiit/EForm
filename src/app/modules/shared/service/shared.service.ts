import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from 'src/app/constants/app.constant';
import { AppConfigService } from 'src/app/service/app.config.service';
import { ApiClientHelper } from './api-client.helper.service';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
    constructor(private http: HttpClient, private utils: ApiClientHelper,
      private appConfig: AppConfigService) { }

    getGridData(api: string, params: any , type: string = AppConstants.ApiRequestTypes.GET) : Observable<any>{
      if(type == AppConstants.ApiRequestTypes.GET) {
        return this.utils.getAsObservable(this.appConfig.apiUrl + api, params);
      }else if(type == AppConstants.ApiRequestTypes.POST) {
        return this.utils.postForObservable(api, params);
      }
    }

    public static setStringDatetoStringFormat(string){
      const year = +string.substring(0, 4);
      const month = +string.substring(4, 6);
      const day = +string.substring(6, 8);
      return month+"-"+day+"-"+year;
  }
}