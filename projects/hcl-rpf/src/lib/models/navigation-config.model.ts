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
