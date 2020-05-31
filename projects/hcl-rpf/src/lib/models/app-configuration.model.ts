
export interface AppConfiguration {
  pfeConfig: HclRpfConfig;
}

export interface HclRpfConfig {
  /**
   * The key name in the state, that is used for the
   * display of generic validation messages.
   */
  validationErrorStateKey?: string;

  /**
   * The key name in the state, were the ID of the current state is stored.
   * This ID is the one, that the backend state service returns.
   * Optional, attribute, ID won't be written to the state if it is not set.
   */
  stateIDStateKey?: string;

  /**
   * Option to disable the automatic scrolling to the top on a page navigation.
   */
  disableAutomaticScrolling?: boolean;

  /**
   * Allows the user to directly navigate into some location within the flow
   * without a restored state.
   * Default is false, which means the user gets redirected to the first page, if no state
   * was restored.
   */
  allowDirectNavigationWithoutState?: boolean;

  /**
   * The label to be displayed on the next button.
   */
  nextButtonLabel?: string;

  /**
   * The label to be displayed on the back button.
   */
  backButtonLabel?: string;

  /**
   * Boolean to enable state restoration by sessionStorage
   */
  enableSessionStorageState?: boolean;

  /**
   * Boolean to enable stateStale
   */
  enableStateCleaning?: boolean;

  /**
   * Boolean to enable state clean on page Navigation
   * if set to true when page is revisited it will auto clean up data
   */
  autoCleanStaleState?: boolean;

  /**
   * Array of pages to exclude from staleState analysis.
   */
  excludeFromStaleState?: Array<string>;

}
