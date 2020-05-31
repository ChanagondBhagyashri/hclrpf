import {AppConfiguration} from './app-configuration.model'
import {RpfNavigationConfiguration} from './navigation-config.model'
/**
 * The RpfConfig contains two generics:
 * APP_CONFIG_TYPE: Allows it to set the extended appConfiguration type.
 * PAGE_CONFIG_TYPE: Allows it to set the extended pagesConfiguration type.
 *
 * @export
 */
export interface RpfConfig<
  APP_CONFIG_TYPE extends AppConfiguration = AppConfiguration,
  PAGE_CONFIG_TYPE extends PageConfig = PageConfig
> {
  appConfiguration?: APP_CONFIG_TYPE;
  pagesConfiguration: PAGE_CONFIG_TYPE[];
  navConfiguration: RpfNavigationConfiguration;
}

/**
 * The page config contains specific configuration attributes
 * for every available page types.
 *
 * This is done, in this way, to allow the usage of the JSON Schema. Separate types would produce separate schemas.
 *
 * This interface has to be extended by the application using the PFE with its custom pages.
 *
 * Configuration examples for each page type can be found in the fnol-config repository in the demo_app branch.
 *
 * @export
 */
export interface PageConfig<T = string> {
  /**
   * The pageID is a unique ID, that is used to reference to a
   * page instance on other locations, like the navigation configuration.
   */
  pageId: string;

  /**
   * Hide the next button on this page.
   * This attribute is optional. The default is false.
   *
   * @memberof PageConfig
   */
  hideNextButton?: boolean;
  /**
   * Hide the back button on this page.
   * This attribute is optional. The default is false.
   *
   * @memberof PageConfig
   */
  hideBackButton?: boolean;
  /**
   * Display the back button as a link instead of a button.
   *
   * @memberof PageConfig
   */
  linkBackButton?: boolean;

  /**
   * Display the next button as a link instead of a button.
   *
   * @memberof PageConfig
   */
  linkNextButton?: boolean;

  /**
   * Specificy a label of the Next button on a specific page.
   */
  nxNextText?: string;

  /**
   * Specificy a label of the Back button on a specific page.
   */
  nxBackText?: string;

  nextBtnOptionalLabel?: string;

  /**
   * Disables the transition animation between pages
   */
  disableAnimations?: boolean;
}
