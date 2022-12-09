import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  config: AppConfigModel = null;
  constructor(private http: HttpClient) { }

  load() {
    const json_file_path = 'assets/config/app.json';
    return new Promise((resolve, reject) => {
      this.http.get<any>(json_file_path).toPromise().then(
        result => {
          this.config = result;
          resolve(this.config);
        }).catch((err) => {
          reject(`couldnt load file '${json_file_path}' : ${err}`);
        });
    });
  }

  public get apiUrl() { return this.config.apiUrl };
}


interface AppConfigModel {
  apiUrl: string;
}
