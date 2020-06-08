import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HclRpfModule, RPFModuleConfiguration, RPF_CONFIGURATION, RPFMasterPageModule, ConfigService } from '../../../hcl-rpf/src/public-api'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { pages } from './pages-mapping';
import { MyCustomConfigService } from './services/myCustomConfigService.service';
import { ExamplePageComponent } from './pages/example-page/example-page.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';

export function RPFConfigFactory() {
  // The factory function can also define dependencies, for example
  // embeddedDataService: EmbeddedDataService<undefined, AEMConfiguration>
  // This service could then be used to get configurations:
  // const applicationID = embeddedDataService.CustomConfiguration.applicationId || environment.applicationID;

  const rpfModuleConfiguration: RPFModuleConfiguration = {
    pageMapping: pages
  };
  return rpfModuleConfiguration;
}

@NgModule({
  declarations: [
    AppComponent,
    ExamplePageComponent,
    SecondPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RPFMasterPageModule,
    HclRpfModule.forRoot({
      provide: RPF_CONFIGURATION,
      useFactory: RPFConfigFactory
    })
  ],
  providers: [
    { provide: ConfigService, useClass: MyCustomConfigService },
  ],
  entryComponents: [ExamplePageComponent, SecondPageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
