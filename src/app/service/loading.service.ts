import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public loadingObs = new BehaviorSubject<TLoadingItems>({status: false, action: EAppActions.App});
	public loadingObs$ = this.loadingObs.asObservable();

  constructor() { }

  start(action: EAppActions) {
    let payload = {status: true, action};
    this.loadingObs.next(payload);
  }

  stop(action: EAppActions) {
    setTimeout(() => {
      let payload = {status: false, action};
      this.loadingObs.next(payload);
    }, 1000);
  }

  public get status() {return this.loadingObs.value};
}

type TLoadingItems = {
  status: boolean,
  action: EAppActions
}

export enum EAppActions {
  App = 'app',
  AddFormIo = 'add-formio',
  UpdateFormIo = 'update-formio',
}