import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CstmBtnComponent } from './components/cstm-btn/cstm-btn.component';
import { LoadingIconBComponent } from 'src/app/modules/shared/components/loading-icon-b/loading-icon-b.component';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { ViewJsonComponent } from './components/view-json/view-json.component';
import { FormsModule } from '@angular/forms';
import { GridComponent } from './components/grid/grid.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ApiClientHelper } from './service/api-client.helper.service';
import { MatDividerModule } from '@angular/material/divider';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { SharedService } from './service/shared.service';
import { PortletComponent } from './components/portlet/portlet.component';

@NgModule({
  declarations: [
    CstmBtnComponent,
    LoadingIconBComponent,
    ViewJsonComponent,
    GridComponent,
    PaginationComponent,
    PortletComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxJsonViewerModule,
    MatMenuModule,
    MatIconModule,
    MatCheckboxModule,
    MatTooltipModule,
    NgxPaginationModule,
    MatPaginatorModule,
    MatDividerModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,
  ],
  exports: [
    CstmBtnComponent, 
    LoadingIconBComponent,
    NgxJsonViewerModule,
    GridComponent,
    PortletComponent,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule
  ],
  providers:[
    ApiClientHelper,
    SharedService
  ]
})
export class SharedModule { }
