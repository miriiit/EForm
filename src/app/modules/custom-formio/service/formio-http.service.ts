import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppConfigService } from 'src/app/service/app.config.service';
import { AppConstants } from 'src/app/constants/app.constant';
import { IGenericResponse } from 'src/app/models/generic-response.model';
import { ApiClientHelper } from '../../shared/service/api-client.helper.service';
import { TGetFormIoRes } from '../components/view-formio/view-formio.component';
import { TFormHeader } from '../components/formio-builder/formio-builder.component';

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

  public getFormIoById(id: any): Observable<IGenericResponse<TGetFormIoRes>> {
    return this.httpService.getAsObservable<IGenericResponse<TGetFormIoRes>>(this.appConfig.apiUrl + AppConstants.Form_Get_Item+'/'+id);
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


  public getFormHeaderDetail(): Observable<IGenericResponse<TFormHeader>> {
    // this.errorObs.next(false);
    const url = `${this.appConfig.apiUrl + AppConstants.Formio_Header_Item}`;
    return this.httpService.getForObservable<IGenericResponse<TFormHeader>>(url);
  }
}
