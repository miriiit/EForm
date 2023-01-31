import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutComponent } from './pages/app-layout/app-layout.component';
import { FormioLayoutComponent } from './pages/formio-layout/formio-layout.component';
import { AppConfigService } from './service/app.config.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LocalStorageService } from './service/local-storage.service';
import { DynamicComponentDirective } from './directives/dynamic-component.directive';
import { AppService } from './service/app.service';
import { AppModalBComponent } from './components/app-modal-b/app-modal-b.component';
import { ConfirmModalComponent } from './components/modals/confirm-modal-b/confirm-modal-b.component';
import { ToastsContainer } from './components/toast-container/toast-container.component';
import { ToastService } from './service/toast.service';
import { SharedModule } from './modules/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


/* before @NgModule({}) */
export function getConfigData(configService: AppConfigService) {
  return () => configService.load();
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AppLayoutComponent,
    FormioLayoutComponent,
    ConfirmModalComponent,
    AppModalBComponent,
    DynamicComponentDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ToastsContainer,
    SharedModule,
    BrowserAnimationsModule
  ],
  exports: [],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: getConfigData,
      deps: [AppConfigService],
      multi: true,
    },
    LocalStorageService,
    AppService,
    ToastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
