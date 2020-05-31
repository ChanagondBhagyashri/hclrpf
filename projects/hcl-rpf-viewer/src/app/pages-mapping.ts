import { DemoAppPageConfig } from './models/page-config.model';
import { ExamplePageComponent } from './pages/example-page/example-page.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';
import { PageDefinition, PfePageMappingService } from '../../../hcl-rpf/src/public-api';
import { lazyLoadedPageRoute } from './pages/lazy-loaded-page/lazy-page.module';

// This is used, to get a typesafe mapping from the page config attributes to the page type.
const pageConfigModel = <TObj>() => (name: keyof TObj) => name;
const getConfigPropertyName = pageConfigModel<DemoAppPageConfig>();

export const pages = new Map<string, PageDefinition>();

PfePageMappingService.addPageToMap(
  pages,
  getConfigPropertyName('examplePageConfig'),
  ExamplePageComponent
);

PfePageMappingService.addPageToMap(
  pages,
  getConfigPropertyName('secondPageConfig'),
  SecondPageComponent
);

PfePageMappingService.addLazyLoadedPageToMap(
  pages,
  getConfigPropertyName('lazyLoadedPage'),
  lazyLoadedPageRoute
);
