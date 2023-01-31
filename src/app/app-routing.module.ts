import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormioLoaderComponent } from '@formio/angular';
import { AppConstants } from './constants/app.constant';
import { FromioListComponent } from './modules/custom-formio/components/fromio-list/fromio-list.component';
import { AvailableRequestsComponent } from './modules/requests/components/available-requests/available-requests.component';
import { AppLayoutComponent } from './pages/app-layout/app-layout.component';
import { FormioLayoutComponent } from './pages/formio-layout/formio-layout.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "app",
    pathMatch: "full"
  }, {
    path: "app",
    component: AppLayoutComponent,
    children: [
      {
        path: AppConstants.ROUTES.FormIo.list.relativePath,
        component: FromioListComponent
      },
      {
        path: AppConstants.ROUTES.Requests.avaialable.relativePath,
        component: AvailableRequestsComponent
      }
    ]
  }, {
    path: AppConstants.ROUTES.FormIo.default.path,
    component: FormioLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import("./modules/custom-formio/custom-formio.module").then(m => m.CustomFormIoModule)
      }
    ]
  },{
    path: AppConstants.ROUTES.Requests.default.path,
    component: FormioLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import("./modules/requests/requests.module").then(m => m.RequestsModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
