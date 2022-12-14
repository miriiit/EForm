import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomComponent } from './modules/custom-formio/custom/custom.component';
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
  }, {
    path: "formio",
    component: FormioLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import("./modules/custom-formio/custom-formio.module").then(m => m.CustomFormIoModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
