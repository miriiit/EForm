import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

    public appObservable = new BehaviorSubject<TComponent>({component: '', action: 'add'});
	public appObservable$ = this.appObservable.asObservable();
    constructor() { }

    loadComponent(payload: TComponent) {
        this.appObservable.next(payload)
    }
}

export type TComponent = {
    component: any,
    action: 'add' | 'remove',
    data?: any
};