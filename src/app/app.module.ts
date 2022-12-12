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
import { ApiClientHelper } from './service/api-client.helper.service';
import { LoadingIconBComponent } from './components/loading-icon-b/loading-icon-b.component';
import { DynamicComponentDirective } from './directives/dynamic-component.directive';
import { AppService } from './service/app.service';
import { AppModalBComponent } from './components/app-modal-b/app-modal-b.component';


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
    LoadingIconBComponent,
    AppModalBComponent,
    DynamicComponentDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: getConfigData,
      deps: [AppConfigService],
      multi: true,
    },
    LocalStorageService,
    ApiClientHelper,
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
