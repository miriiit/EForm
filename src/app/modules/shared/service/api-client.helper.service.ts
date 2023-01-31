import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { AppConstants } from 'src/app/constants/app.constant';

@Injectable()
export class ApiClientHelper {

	public static loadingObs = new BehaviorSubject<boolean>(false);
	public static loadingObs$ = ApiClientHelper.loadingObs.asObservable();

	public static errorObs = new BehaviorSubject<boolean>(false);
	public static errorObs$ = ApiClientHelper.errorObs.asObservable();

	headers: HttpHeaders;
	requestOptions: RequestOptions;
	expirationSeconds = ""; // this.localStorage.get(StorageKeys.expires_in);
	currentDateTime;
	sessionExpirationTime;

	constructor(
		public http: HttpClient
	) {
	}

	getHeaderParams(loginToken?: any) {
		// let token = this.localStorage.get(StorageKeys.token);
		// if (loginToken) {
		// 	token = loginToken;
		// }

		const headerParams: { [key: string]: string } = {
			'Content-Type': 'application/json',
			// Authorization: token ? `Bearer ${token}` : '',
		};
		return headerParams;
	}

	checkForUnauthorizedRequest(): void {
		// this.setSessionExpiration();
		// if (!this.sessionExpirationTime) {
		// 	this.logout();
		// }
		// this.currentDateTime = moment().valueOf();
		// const hasSessionExpired = this.currentDateTime > this.sessionExpirationTime;
		// if (hasSessionExpired) {
		// 	this.logout();
		// }
	}



	public getForObservable<T>(url: string, stopCheck?: boolean): Observable<T> {
		const requestHeaders = AppConstants.httpOptions;
		return this.http.get<T>(url, requestHeaders)
			.pipe(tap({
				error: () => {
					if (stopCheck) {
						return;
					}
					this.checkForUnauthorizedRequest();
				}
			}));
	}

	public getAsObservable<T>(url: string, params: any = null): Observable<T> {
		if (params) {
			return this.http.get<T>(url, { ...AppConstants.httpOptions, params });
		} else {
			return this.http.get<T>(url, AppConstants.httpOptions);
		}
	}


	public postForObservable<T>(
		url: string, data: any, checkAuth = true,
	): Observable<T> {
		let requestHeaders = AppConstants.httpOptions;
		return this.http.post<T>(url, data, requestHeaders)
			.pipe(tap({
				error: () => {
					if (checkAuth) {
						this.checkForUnauthorizedRequest();
					}
				}
			}));
	}


	buildUrlQueryParams(data) {
		this.requestOptions.params = new HttpParams();
		if (data) {
			const dataKeys = Object.keys(data);
			const params = new HttpParams();
			dataKeys.forEach((key) => {
				params.append(data[key], data[key].name);
			});
			return params;
		}
	}
}

class RequestOptions {
	headers?: HttpHeaders | { [header: string]: string | string[] };
	observe?: 'body';
	params?: HttpParams | { [param: string]: string | string[] };
	reportProgress?: boolean;
	responseType: 'arraybuffer';
	withCredentials?: boolean;
}
