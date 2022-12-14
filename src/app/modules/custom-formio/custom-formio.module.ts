import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DimageComponent } from './components/dimage/dimage.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomComponent } from './custom/custom.component';
import { UserFormHeaderComponent } from './components/user-form-header/user-form.header.component';
import { registerDimageComponent } from './formio/dimage.formio';
import { registerFormHeader } from './formio/user-from-header.formio';
import { FormioHttpService } from './service/formio-http.service';
import { FormioAppConfig, FormioModule } from '@formio/angular';
import { AppConfig } from 'src/formio-config';
import { FormsModule } from '@angular/forms';
import { ViewFormioComponent } from './components/view-formio/view-formio.component';
import { AppConstants } from 'src/app/constants/app-constants';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: CustomComponent,
  },
  {
    path: AppConstants.ROUTES.formIo.view,
    component: ViewFormioComponent,
  },
];

@NgModule({
  declarations: [
    CustomComponent,
    ViewFormioComponent,
    UserFormHeaderComponent,
    DimageComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    FormioModule,
    SharedModule
  ],
  providers: [
    FormioHttpService,
    {provide: FormioAppConfig, useValue: AppConfig},
  ],
  entryComponents: [
    UserFormHeaderComponent,
    DimageComponent
  ]
})
export class CustomFormIoModule {
  constructor(injector: Injector) {
    registerFormHeader(injector);
    registerDimageComponent(injector);
  }
}
