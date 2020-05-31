import { RpfConfig, RpfNavigationConfiguration, ConfigService } from '../../../../hcl-rpf/src/public-api';
import { Injectable } from '@angular/core';
import { DemoAppPageConfig, GUARD_KEYS } from '../models/page-config.model';

export const navigation: RpfNavigationConfiguration = {
  pages: [
    {
      pageId: 'welcomePage',
      nextOptionList: [
        {
          nextPageId: 'secondPageID',
        }
      ]
    },
    {
      pageId: 'secondPageID',
      nextOptionList: [
        {
          nextPageId: 'lazyLoadedPageID',
        }
      ],
    },
    {
      pageId: 'lazyLoadedPageID',
      nextOptionList: []
    }
  ]
};

const examplePageConfig: DemoAppPageConfig = {
  pageId: 'welcomePage',
  hideNextButton: false,
  hideBackButton: true,
  examplePageConfig: {
    firstConfigValue: 'This is the Page Title from the Configuration',
    secondConfigValue: 'Another text from configuration'
  }
};

const secondPageConfig: DemoAppPageConfig = {
  pageId: 'secondPageID',
  secondPageConfig: {
    someConfigValue: 'This is a configuration value for the second page',
    anotherConfigValue: 'Another value'
  }
};

const lazyLoadedPageConfig: DemoAppPageConfig = {
  pageId: 'lazyLoadedPageID',
  hideNextButton: true,
  lazyLoadedPage: {
    pageTitle: 'This page type is lazy loaded during runtime'
  }
};

export const exampleConfig: RpfConfig = {
  navConfiguration: navigation,
  pagesConfiguration: [examplePageConfig, secondPageConfig, lazyLoadedPageConfig],
  appConfiguration: {
    pfeConfig: {
      validationErrorStateKey: 'test',
      stateIDStateKey: 'pfeStateID',
      nextButtonLabel: 'Next',
      backButtonLabel: 'Back'
    }
  }
};

@Injectable()
export class MyCustomConfigService extends ConfigService {
  public once: boolean;

  public async getConfig(): Promise<RpfConfig> {

    return exampleConfig;
  }

  get applicationId(): string {
    return exampleConfig.navConfiguration.pages;;
  }
}
