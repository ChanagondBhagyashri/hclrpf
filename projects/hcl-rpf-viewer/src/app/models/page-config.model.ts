import { PageConfig } from '../../../../hcl-rpf/src/public-api';
import { ExamplePageConfig } from '../pages/example-page/example-page-config.model';
import { SecondPageConfig } from '../pages/second-page/second-page-config.model';
import { LazyLoadedPageConfig } from '../pages/lazy-loaded-page/lazy-page-config.model';

export enum GUARD_KEYS {
  PFE_EXAMPLE_CAN_LOAD = 'PFE_EXAMPLE_CAN_LOAD',
  PFE_EXAMPLE_CAN_ACTIVATE = 'PFE_EXAMPLE_CAN_ACTIVATE',
}

export interface DemoAppPageConfig extends PageConfig<GUARD_KEYS> {
  examplePageConfig?: ExamplePageConfig;
  secondPageConfig?: SecondPageConfig;
  lazyLoadedPage?: LazyLoadedPageConfig;
}
