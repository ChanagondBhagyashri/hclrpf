import { Inject, Injectable } from '@angular/core';
import { RPFModuleConfiguration, RPF_CONFIGURATION } from '../models/rpf-module-config.model';
import { PageDefinition, RoutePfeLazy } from '../models/page-definition.model';

/**
 * The PfePageMappingService is responsible to map the configuration to a page component.
 *
 * @export
 */
@Injectable()
export class PfePageMappingService {
  constructor(@Inject(RPF_CONFIGURATION) private rpfModuleConfiguration: RPFModuleConfiguration) {
    this.pages = this.rpfModuleConfiguration.pageMapping;
  }

  /**
   * Each page mapping consists of a type (attribute in the page configuration), that is used in the configuration.
   * This type is mapped to a PageDefinition, which references the page component to use.
   */
  private pages: Map<string, PageDefinition>;

  /**
   * Helper to add a page component to the mapping.
   *
   * @param  pageType The attribute used in the configuration.
   * @param pageComponent The page component to use.
   */
  static addPageToMap(pages: Map<string, PageDefinition>, pageType: string, pageComponent: any) {
    pages.set(pageType, new PageDefinition(pageComponent));
  }

  /**
   * Helper to add a lazy loaded page component to the mapping.
   * Check the documentation, on how to create such a page.
   *
   * @param  pageType The attribute used in the configuration.
   * @param lazyPageRoute The lazy loaded module.
   */
  static addLazyLoadedPageToMap(pages: Map<string, PageDefinition>, pageType: string, lazyPageRoute: RoutePfeLazy) {
    const pageDef = new PageDefinition();
    pageDef.lazyPageRoute = lazyPageRoute;
    pages.set(pageType, pageDef);
  }

  /**
   * Determines the page type of a page configuration by its page configuration attribute.
   *
   * @param config The page config.
   * @returns The determined page type.
   */
  getPageDefinition(config: any): PageDefinition {
    for (const key in config) {
      if (config.hasOwnProperty(key)) {
        const pageDef: PageDefinition = this.pages.get(key);
        if (pageDef) {
          return pageDef;
        }
      }
    }
  }
}
