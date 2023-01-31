import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomComponent } from './custom/custom.component';
import { AvailableRequestsComponent } from './components/available-requests/available-requests.component';
import { RouterModule, Routes } from '@angular/router';
import { AppConstants } from 'src/app/constants/app.constant';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [
  {
    path: '',
    component: CustomComponent,
  },
  {
    path: AppConstants.ROUTES.Requests.avaialable.path,
    component: AvailableRequestsComponent,
  },
  
];

@NgModule({
  declarations: [
    CustomComponent,
    AvailableRequestsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ]
})
export class RequestsModule { }
