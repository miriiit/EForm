import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CstmBtnComponent } from './components/cstm-btn/cstm-btn.component';
import { LoadingIconBComponent } from 'src/app/modules/shared/components/loading-icon-b/loading-icon-b.component';



@NgModule({
  declarations: [
    CstmBtnComponent,
    LoadingIconBComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CstmBtnComponent, 
    LoadingIconBComponent
  ]
})
export class SharedModule { }
