import { LoadChildren, Route } from '@angular/router';

/**
 * Extends the Angular Route and makes the loadChildren mandatory.
 */
export interface RoutePfeLazy extends Route {
  loadChildren: LoadChildren;
}

/**
 * A PageDefinition contains the component for a page.
 *
 * @export
 */
export class PageDefinition {
  pageComponent?: any;
  /**
   * For lazy loaded pages a Route with the loadChildren defined needs to be provided.
   */
  lazyPageRoute?: RoutePfeLazy;

  constructor(pageComponent?: any) {
    if (pageComponent) {
      this.pageComponent = pageComponent;
    }
  }
}
