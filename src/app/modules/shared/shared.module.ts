import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CstmBtnComponent } from './components/cstm-btn/cstm-btn.component';
import { LoadingIconBComponent } from 'src/app/modules/shared/components/loading-icon-b/loading-icon-b.component';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { ViewJsonComponent } from './components/view-json/view-json.component';

@NgModule({
  declarations: [
    CstmBtnComponent,
    LoadingIconBComponent,
    ViewJsonComponent,
  ],
  imports: [
    CommonModule,
    NgxJsonViewerModule
  ],
  exports: [
    CstmBtnComponent, 
    LoadingIconBComponent,
    NgxJsonViewerModule
  ]
})
export class SharedModule { }
