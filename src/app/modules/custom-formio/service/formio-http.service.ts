import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppConfigService } from 'src/app/service/app.config.service';
import { AppConstants } from 'src/app/constants/app-constants';
import { ApiClientHelper } from 'src/app/service/api-client.helper.service';
import { TFormHeader } from '../custom/custom.component';
import { IGenericResponst } from 'src/app/models/generic-response.model';
import { finalize, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormioHttpService {

	public errorObs = new BehaviorSubject<boolean>(false);
	public errorObs$ = ApiClientHelper.errorObs.asObservable();

  constructor(private appConfig: AppConfigService,
    private httpService: ApiClientHelper) { }

  public getFormList(): Observable<any[]> {
    return this.httpService.getAsObservable(this.appConfig.apiUrl + AppConstants.Form_Get_Listing);
  }

  addForm(form: any): Observable<any> {
    var data = {
      "id": 0,
      "formJson": form
    };
    return this.httpService.postForObservable<any>(this.appConfig.apiUrl + AppConstants.Form_Add_Item, data);
  }

  updateForm(formData: any): Observable<any> {

    var data = {
      "id": formData.id,
      "formJson": formData.formJson
    };
    return this.httpService.postForObservable<any>(this.appConfig.apiUrl + AppConstants.Form_Update_Item, data);
  }

  deleteForm(id: any): Observable<any> {
    return this.httpService.getAsObservable(this.appConfig.apiUrl + AppConstants.Form_Delete_Item + id);
  }


  public getFormHeaderDetail(): Observable<IGenericResponst<TFormHeader>> {
    // this.errorObs.next(false);
    const url = `${this.appConfig.apiUrl + AppConstants.Formio_Header_Item}`;
    return this.httpService.getForObservable<IGenericResponst<TFormHeader>>(url);
  }
}
