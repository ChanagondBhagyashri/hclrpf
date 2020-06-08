import { NgModule, Provider, ModuleWithProviders } from '@angular/core';
import { BusinessService } from './services/business.service';
import { RpfRoutingModule } from './rpf-routing/rpf-routing.module';
import { ConfigService } from './services/config.service'
import { MasterPageComponent } from './master-page/master-page.component';
import { PfePageMappingService } from './services/page-mapping-service.service';
import { RPFPageConfigResolver, RPFNavPageConfigResolver } from './services/page-config-resolver.service';

const defaultProviders: Provider[] = [
  BusinessService,
  PfePageMappingService,
  RPFPageConfigResolver,
  RPFNavPageConfigResolver,
  [{ provide: ConfigService, useClass: ConfigService }],
];

@NgModule({
  imports: [
    RpfRoutingModule
  ]
})
export class HclRpfModule {
  /**
   * @param rpfModuleConfigurationProvider Provider, that provides the RPF_CONFIGURATION injection token.
   * @memberof RpfModule
   */
  static forRoot(rpfModuleConfigurationProvider: Provider): ModuleWithProviders {
    return {
      ngModule: HclRpfModule,
      providers: [...defaultProviders, rpfModuleConfigurationProvider]
    };
  }
}
