/**
 * Unique ID of a page.
 */
export type PageId = string;

/**
 * The RpfNavigationConfiguration contains all configuration values that are required for
 * the navigation between different pages in a flow.
 * The execution flow is as follows:
 *
 * 1. Execute service activators
 * 2. Retrieve result and store to state
 * 3. Execute navigation conditions
 *
 */
export interface RpfNavigationConfiguration<ACTIONS = any> {
  /**
   * DEPRECATED: Use the errorPageNavigation instead
   * The id to be displayed when a non recoverable error occurs.
   *
   * An example for such an error is a failed service activator call.
   * It is possible to exclude certain http status codes from the automatic error handling with the
   * serviceActivatorErrorHandlingExcludeStatusCodes configuration in the application config.
   *
   * @deprecated Use the errorPageNavigation instead.
   */
  errorPageID?: string;

  /**
   * First page configuration.
   * It can be either a pageId (as string) or a first page configration with their next options.
   *
   * @memberof NavigationConfiguration
   */
  firstPage?: string;
  /**
   * The collection of the navigation configuration for all pages of a flow.
   *
   * @memberof NavigationConfiguration
   */
  pages: any;
}




/**
 * # Navigation configuration
 *
 * The navigation configuration determines the next page to be shown, dependent on values in the state.
 *
 * Each next page can have a number of conditions. These conditions are connected with AND,
 * which means, all of them have to evaluate to true for the page to be shown.
 *
 * The navigation options are checked in the order, as they are defined in the configuration.
 * This means, if the conditions of the first option evaluates to true, the navigation is started
 * immediately, the other options are not checked anymore.
 *
 * @export
 */
export interface PageNavigationConfiguration<ACTIONS = any> {
  /**
   * The pageID is a unique ID of a page throughout the whole configuration.
   * In the navigation it references pages from the page configuration.
   *
   * @memberof NavigationConfiguration
   */
  pageId: PageId;

  /**
   * The pageConfigIdReference allows it to map a navigation config to a different pageConfig than the pageID.
   * This makes it possible, to reuse the same pageConfig multiple times in the navigation. (1 pageConfig -> n navigationConfigs)
   *
   * If there is also a pageConfig with the pageId of this navigation config, a deep merge is done on top of the pageConfigIdReference.
   * This makes it possible, to overwrite certain parts of the referenced page config.
   * By default, arrays are replaced. If a concat should be done instead, the pageConfigIdReferenceDeepMergeArrays flag can be used.
   */
  pageConfigIdReference?: PageId;

  /**
   * Used in combination with pageConfigIdReference. Do not overwrite arrays, but concat them.
   */
  pageConfigIdReferenceDeepMergeArrays?: boolean;

  /**
   * The list of possible next pages in the navigation flow.
   *
   * @memberof NavigationConfiguration
   */
  nextOptionList: NavOptionConfig[];

  /**
   * Do not add this page to the history of navigated pages.
   *
   * @memberof PageNavigationConfiguration
   */
  omitFromHistory?: boolean;

  /**
   * If this attribute is set to true, the remote state storage will
   * be shutdown when this page is entered.
   * This means the latest state will not be updated anymore.
   */
  shutdownStateStorage?: boolean;

  /**
   * Allows the user to directly navigate this page within the flow
   * without a restored state.
   * Default is false, which means the user gets redirected to the first page, if no state
   * was restored.
   */
  allowDirectNavigationWithoutState?: boolean;
  /**
   * By default when restoring the state it will navigate to the last visited page. If false
   * then it will navigate to the page passed in the fragment of url.
   * ex: allianz.com/blabla#navigateToThisPage
   */
  navigateToLastVisitedPage?: boolean;

  /**
   * set to true to remove pages that have been visited
   * multiple nextOptionList pages that stores value to the state
   */
  removePageFromState?: boolean;

}

export interface NavOptionConfig {
  /**
   * The ID of the next page to be displayed, if the conditions evaluate to true.
   * The ID is a reference to the page configuration.
   *
   * The nextPageId can also be a jsonPath expression, that will be resolved during navigation.
   *
   * @memberof NavOptionConfig
   */
  nextPageId: string;

}
