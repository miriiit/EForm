import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AppConstants } from 'src/app/constants/app.constant';
import { IconsConstant } from 'src/app/constants/icons.constant';
import { EAppActions } from 'src/app/service/loading.service';
import { ToastService } from 'src/app/service/toast.service';
import { IGridAction, IGridConfig } from '../../model/grid-interface';
import { IPagination } from '../../model/pagination-interface';
import { SharedService } from '../../service/shared.service';
import { PaginationComponent } from '../pagination/pagination.component';
import { GridResponse } from './grid.response';

import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit, OnChanges {

  GridActionSearch: EAppActions = EAppActions.GridActionSearch;

  @ViewChild('pagination') paginationComponent: PaginationComponent;

  @Input() pageConfig: IGridConfig;
  @Input() data: any;
  @Output() updatedObj = new EventEmitter<IGridAction>();
  @Output() openInDetailMode = new EventEmitter<any>();
  @Output() popupClickHandler = new EventEmitter<any>();
  @Output() menuItem = new EventEmitter<any>();
  @Output() openAddPage = new EventEmitter<any>();
  @Output() editViewEmitter = new EventEmitter<any>();
  pagination: IPagination;
  totalRecords: any = 0;
  activePage: number = 0;
  api: any;
  module: any;
  apiPath: any;
  params: any;
  requestType: string = AppConstants.ApiRequestTypes.GET;
  includePagination: boolean = true;
  sortedData: any = [];
  inlineEditting: boolean = true;
  searchForm: FormGroup;
  itemsPerpage: any = 0;
  pageNo: any = 1;

  //used for empty payload
  defaultPayload: any = null;
  defaultLookups: any = null;

  constructor(
    private toastService: ToastService,
    private sharedService: SharedService) {
  }

  ngOnInit(): void {
    this.bindForm();

    if (this.data.hasOwnProperty('payload')) {
      this.defaultPayload = Object.assign({}, this.data.payload);
    }
  }
  searchControl: FormControl = null;

  ngOnChanges() { }

  bindForm() {
    // this.searchControl = new FormControl();
  }

  prepareGridApi(apiPath: string, sorting, params: any = {}, type: string = AppConstants.ApiRequestTypes.GET, incluePagination: boolean = false) {
    this.apiPath = apiPath;
    this.params = this.getParams(params, sorting);
    this.requestType = type;
    this.setPageable();// for front end pagination
    this.getGridDataFromServer();
  }

  getGridDataFromServer() {
    if (this.apiPath) {
      this.sharedService.getGridData(this.apiPath, this.params, this.requestType)
        .subscribe(res => {
          if (res.lookups) {
            this.appendLookups(res);
          }
          setTimeout(() => {
            this.parseResponse(res);
          }, 100);
        }, error => { console.log(error) });
    }
  }

  parseResponse(res, action: string = 'list', isEdit: boolean = false) {
    let list = res;
    if (action == 'list') {
      list = GridResponse.getGridResponse(list, this.pageConfig.id ? this.pageConfig.id : null)
      this.sortedData = list;
      this.totalRecords = list.length;
      this.data['values'] = JSON.parse(JSON.stringify(this.sortedData));

      if (isEdit) {
        this.editAll();
      } else if (!(list && list.length)) {
        this.intializeEmptylistForMapper();
      }
    }
  }

  appendLookups(res: any, action: string = 'lookup') {
    let list = res.list;
    this.defaultLookups = Object.assign({}, res.lookups);
    if (list) {
      for (let record of list) {
        for (let key in res.lookups) {
          record[key] = res.lookups[key];
        }
      }
    }
    //deliver to search fields
    this.updatedObj.emit({ data: res.lookups, action: EAppActions.GridActionLookup });
  }

  setPageable() {
    this.itemsPerpage = this.pagination.recordsPerPage;
    this.pageNo = this.pagination.pageNo;
    this.totalRecords = this.data && this.data['values'] ? this.data['values'].length : [];
    if (this.paginationComponent) {
      this.paginationComponent.ngOnChanges();
    }
  }

  getParams(params, sorting) {
    if (this.includePagination) {
      if (!this.pagination) {
        this.pagination = this.paginationComponent.ipagination
      }
      let obj: IPagination = this.pagination;
      obj.sortBy = sorting.sortBy;
      obj.sortOrder = sorting.sortOrder;
      if (params) {
        let pagination = Object.assign({}, { ...obj }, { pageNo: obj.pageNo - 1 });
        obj = { ...pagination, ...params }
      }
      return obj;
    } else {
      return { ...params, ...sorting };
    }
  }

  copyField: any;
  openInEditMode(field) {
    this.copyField = JSON.parse(JSON.stringify(field));
    field.isEdit = true;
    //this.update(field);
  }

  cancleUpdation(field) {
    field.isEdit = false;
    Object.keys(field).forEach(name => {
      field[name] = this.copyField[name];
    });
  }

  openRecordDetailPage(record, key) {
    this.openInDetailMode.emit({ record: record, key: key });
  }

  clickHandler(record: any = null, action: EAppActions) {
    if (action) {
      if (action == EAppActions.GridActionMenuActive ||
        action == EAppActions.GridActionMenuArchive ||
        action == EAppActions.GridActionMenuCopy ||
        action == EAppActions.GridActionMenuDelete
      ) {
        throw new Error('Not Implemented action: '+ action);
        // this.updatedObj.emit({ data: record, action });
      } else if (action == EAppActions.GridActionEnableEditRow) {
        this.enableEditRow(record);
      } else if (action == EAppActions.GridActionEnableViewRow ||
        action == EAppActions.GridActionEnableDeleteRow
        || action == EAppActions.GridActionEnableEditBuilder) {
        this.updatedObj.emit({ data: record, action });
      } else if (action == EAppActions.GridActionEnableCancelRow) {
        record['isEdit'] = false;
      } else if (action == EAppActions.GridActionEnableSaveRow) {
        record['isEdit'] = false;
        let payload = this.data.collection.get(record[this.data.uniqueId]);
        // console.log('payload: ' + payload);
        this.updatedObj.emit({ data: payload, action });
      } else {
        this.popupClickHandler.emit(record);
      }
    }
  }

  delete(field) {
    let row = this.data.values.find(val => val.id == field.id);
    const index = this.data.values.indexOf(row);
    this.data.values.splice(index, 1);
  }

  update(field) {
    field.isEdit = false;
    //this.updatedObj.emit(field)
  }

  getLookItemBykey(lookup: any, key: string) {
    return lookup.find(item => item.key == key);
  }

  updateValue(record: any, uniqueId: string, column: any, value: any, isFilter: boolean = true) {
    let lookup = record[column.lookupKey]
    if (lookup) {
      let item = this.getLookItemBykey(lookup, value);
      if (item) {
        if (uniqueId && column) {
          let key = column?.paramKey;
          let payload = this.data.collection.get(uniqueId);
          if (key && item.key) {
            if (payload.hasOwnProperty(key)) {
              payload[key] = item.key;
            }
          }

          if (!record[column.paramKey]) {
            record[column.paramKey] = item.key;
            record[column.paramValue] = item.value;
          }

          this.data.collection.set(uniqueId, payload);
        }
      }
    }
    // console.log('key: '+ key + ' value: '+ value);
  }

  fetchOtherColumnLookup(lookupName: string) {
    return this.data.columns.find(item => item.lookupKey == lookupName);
  }

  sortColumn(col, order, event) {
    event.stopPropagation();
    let column = {
      active: col,
      direction: order
    }
    this.pagination.sortOrder = column.direction;
    this.pagination.sortBy = column.active;
    //this.getGridDataFromServer();
    this.sortData(column);
  }

  //Search By Specific Columns
  applyFilter(filterValue: string, filter: any) {
    if (filterValue != '' && filterValue != null) {
      this.data['values'] = this.sortedData.filter(data => {
        if (data[filter.key] != null) {
          if (typeof data[filter.key] === "boolean") {
            return ("" + data[filter.key]).includes(filterValue);
          } else if(typeof data[filter.key] === "number") {
            return ((''+data[filter.key]).includes(filterValue));
          } else if(typeof data[filter.key] === "string") {
            return (data[filter.key].trim().toLowerCase()).includes(filterValue.trim().toLowerCase());
          }
        }
      });
    }
    else {
      this.data['values'] = this.sortedData;
    }
    this.setPageable();
  }

  search(filterValue: string) {
    if (filterValue != '' && filterValue != null) {
      let filtteredData: any = [];
      this.data.columns.forEach(val => {
        let list = this.sortedData.filter(data => {
          if (data[val.key] != null) {
            if (typeof data[val.key] === "boolean") {
              return ("" + data[val.key]).includes(filterValue);
            }
            else {
              return (data[val.key].trim().toLowerCase()).includes(filterValue.trim().toLowerCase());
            }
          }
        });
        filtteredData = filtteredData.concat(list);
      });
      this.data['values'] = [...new Map(filtteredData.map(item => [item[this.pageConfig.searchId], item])).values()];
    }
    else {
      this.data['values'] = this.sortedData;
    }
    this.setPageable();
  }

  displayActivePage(ipagination: IPagination) {
    this.pagination = ipagination;
    //this.getGridDataFromServer(); // for server side pagination
    this.setPageable(); // for UI side pagination
  }

  sortData(sort: any) {
    let columnName = sort.active['key'];
    const data = this.sortedData.slice();
    if (!sort.active || sort.direction == '') {
      this.data['values'] = data;
      return;
    }
    this.data['values'] = data.sort((a, b) => {
      let isAsc = sort.direction == 'asc';
      let first = a[columnName];
      let second = b[columnName];
      if(typeof first == 'number' && typeof second == 'number') {
        return this.compare(first, second, isAsc)
      }else {
        return this.compare(first ? first.toLowerCase() : '', second ? second.toLowerCase() : '', isAsc);
      }
    });
  }

  compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  changeColumnStatus(col) {
    col.isShow = !col.isShow;
  }

  length = 100;
  pageSize = 50;
  pageSizeOptions: number[] = [10, 25, 50, 100];

  getIcon(key) {
    let iconName;
    if (key) {
      iconName = IconsConstant.getIcon(key);
    }
    return iconName;
  }

  addClickHandler() {
    this.openAddPage.emit();
  }

  editView() {
    this.editViewEmitter.emit();
  }
  emitData() {
    this.menuItem.emit();
  }

  intializeEmptylistForMapper() {
    let list = [];
    let emptyRow = {};
    // creating empty object from columns
    for (let col of this.data.columns) {
      emptyRow[col.paramKey] = null;
    }

    emptyRow['isEdit'] = true;
    if (this.data.hasOwnProperty('appendListCols')) {
      this.appendLookups({ 'list': list, lookups: this.defaultLookups });
      setTimeout(() => {
        this.parseResponse({ 'list': list }, 'list', true);
      }, 100);
    }
  }

  editAll() {
    for (let item of this.data.values) {
      this.enableEditRow(item);
    }
  }

  enableEditRow(record: any) {
    record['isEdit'] = true;
    this.fillPayloadData(record);
  }

  fillPayloadData(record) {
    if (this.data.hasOwnProperty('payload')) {
      // empty intialization according to input received
      this.data.payload = Object.assign({}, this.defaultPayload);

      for (let key in record) {
        if (this.data.payload.hasOwnProperty(key) && record[key]) {
          this.data.payload[key] = record[key];
        }
      }
    }
    this.data.collection.set(record[this.data.uniqueId], this.data.payload);
  }

  pageEvent(event: PageEvent) {
  }
}