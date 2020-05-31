import { PageDefinition } from './page-definition.model';
import { InjectionToken } from '@angular/core';

/**
 * This configuration needs to be set in the forRoot of the HCL-RPF module.
 * It contains all the necessary library configurations.
 *
 * @export
 */
export interface RPFModuleConfiguration {
  /**
   * Maps the configuration attributes to a PageDefinition.
   */
  pageMapping: Map<string, PageDefinition>;
}

export const RPF_CONFIGURATION: InjectionToken<RPFModuleConfiguration> = new InjectionToken<RPFModuleConfiguration>(
  'RPF_CONFIGURATION'
);
