import {Injectable} from '@angular/core';


@Injectable()
export class LocalStorageService {

	private storeKeys: Array<any> = [];
	private store: any = {};


	public get(key: string): any {
		return localStorage.getItem(key);
	}

	public getAll(): any {
		const obj = {};
		this.storeKeys.forEach(i => obj[i] = localStorage.getItem(i));
		return obj;
	}


	public save(key: string, value: any): boolean {
		localStorage.setItem(key, value);
		this.storeKeys.push(key);
		return true;
	}


	setSessionExpiration(val) {
		const expirationSeconds = val ? parseInt(val, 10) : 0;
		const sessionExpirationTime = (expirationSeconds * 1000).valueOf();
		this.save('session_expiration', sessionExpirationTime);
	}

	public saveAll(obj: any = {}): boolean {
		for (const x in obj) {
			if (obj.hasOwnProperty(x)) {
				localStorage.setItem(x, obj[x]);
				this.storeKeys.push(x);
			}
		}
		return true;
	}

	public deleteValue(key: any): boolean {
		localStorage.removeItem(key);
		return true;
	}

	public deleteAll(): boolean {
		localStorage.clear();
		return true;
	}
}
