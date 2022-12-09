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

const routes: Routes = [
  {
    path: '',
    component: CustomComponent
  },
];

@NgModule({
  declarations: [
    CustomComponent,
    UserFormHeaderComponent,
    DimageComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    FormioModule,
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