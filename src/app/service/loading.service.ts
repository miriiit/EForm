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
  action: EAppActions,
}

export enum EAppActions {
  App = 'app',
  AddFormIo = 'add-formio',
  UpdateFormIo = 'update-formio',
  
  GridActionSearch =  'grid-action-search',
  GridActionMenuActive =  'grid-action-menu-active',
  GridActionMenuArchive =  'grid-action-menu-archive',
  GridActionMenuDelete = 'grid-action-menu-delete',
  GridActionMenuCopy = 'grid-action-menu-copy',

  GridActionEnableEditBuilder = 'grid-action-enable-edit-builder',
  GridActionEnableEditRow = 'grid-action-enable-edit-row',
  GridActionEnableCancelRow = 'grid-action-enable-cancel-row',
  GridActionEnableSaveRow = 'grid-action-enable-save-row',
  GridActionEnableViewRow = 'grid-action-enable-view-row',
  GridActionEnableDeleteRow = 'grid-action-enable-delete-row',
  GridActionLookup = 'grid-action-lookup',
}