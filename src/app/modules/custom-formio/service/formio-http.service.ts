import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfigService } from 'src/app/service/app.config.service';
import { AppConstants } from 'src/app/constants/app-constants';

@Injectable({
  providedIn: 'root'
})
export class FormioHttpService {

  constructor(private http: HttpClient, private appConfig: AppConfigService) { }

  public getFormList(): Observable<any[]> {
    return this.http.get<any[]>(this.appConfig.apiUrl + AppConstants.Form_Get_Listing);
  }

  addForm(form: any): Observable<any> {

    var data = {
      "id": 0,
      "formJson": form
    };
    return this.http.post<any>(this.appConfig.apiUrl + AppConstants.Form_Add_Item, data, AppConstants.httpOptions);
  }

  updateForm(formData: any): Observable<any> {

    var data = {
      "id": formData.id,
      "formJson": formData.formJson
    };

    return this.http.post<any>(this.appConfig.apiUrl + AppConstants.Form_Update_Item, data, AppConstants.httpOptions);
  }

  deleteForm(id: any): Observable<any> {
    return this.http.get<any>(this.appConfig.apiUrl + AppConstants.Form_Delete_Item + id, AppConstants.httpOptions);
  }
}
