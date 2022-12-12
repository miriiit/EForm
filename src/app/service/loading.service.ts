import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
    public loadingObs = new BehaviorSubject<boolean>(false);
	public loadingObs$ = this.loadingObs.asObservable();

  constructor() { }

  start() {
    this.loadingObs.next(true);
  }

  stop() {
    this.loadingObs.next(false);
  }

  public get status() {return this.loadingObs.value};
}