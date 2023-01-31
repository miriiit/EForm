import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { IPagination } from '../../model/pagination-interface';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input() totalRecords = 0;  
  @Output() onPageChange: EventEmitter<IPagination> = new EventEmitter(); 
  recordsPerpage = [5,10,25,50,100];
  ipagination : IPagination = {
    pageNo: 1,
    sortOrder: 'asc',
    sortBy:'',
    recordsPerPage:10
  };

  public pages: number [] = [];  

  constructor(){}

  ngOnInit(): void {}

  ngOnChanges(): any {  
    const pageCount = this.getPageCount();  
    this.pages = this.getArrayOfPage(pageCount);  
    this.setRecordsRange();
  }  

  private getPageCount(): number {  
    let totalPage = 0;  
    if (this.totalRecords > 0 && this.ipagination.recordsPerPage > 0) {  
      const pageCount = this.totalRecords / this.ipagination.recordsPerPage;  
      const roundedPageCount = Math.floor(pageCount);  
      totalPage = roundedPageCount < pageCount ? roundedPageCount + 1 : roundedPageCount;  
    }  
    return totalPage;  
  }  

  private getArrayOfPage(pageCount: number): number [] {  
    const pageArray = [];  
  if (pageCount > 0) {  
      for(let i = 1 ; i <= pageCount ; i++) {  
        pageArray.push(i);  
      }  
    }  
    return pageArray;  
  }  

  recordsRange={
    start:1,
    end:10
  }

  setRecordsRange(){
    const modulus = this.totalRecords % this.ipagination.recordsPerPage;
    let currentItems = (this.ipagination.recordsPerPage * this.ipagination.pageNo);
    this.recordsRange.start = currentItems - this.ipagination.recordsPerPage + 1;
    if(currentItems <= this.totalRecords){
      this.recordsRange.end = currentItems;
    }
    else{
      this.recordsRange.end = currentItems - (this.ipagination.recordsPerPage - modulus);
    }
  }

  onClickPage(pageNumber: number=null): void {  
    if (pageNumber >= 1 && pageNumber <= this.pages.length) {  
      this.ipagination.pageNo = pageNumber;  
    }  
    this.onPageChange.emit(this.ipagination)
  }  

}
