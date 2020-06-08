import { Injectable } from '@angular/core';
import { RpfConfig } from '../../public-api';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  public async getConfig(): Promise<RpfConfig> {
    let config:RpfConfig={
      pagesConfiguration:[],
      navConfiguration:{
        pages:[]
      }
    };
    return config;
  }
  public async getPageConfiguration(pageID: string): Promise<any> {
    const config: RpfConfig<any, any> = await this.getConfig();
    const pagesConfiguration: any[] = config.pagesConfiguration;
    return pagesConfiguration.find(page => {
      return page.pageId === pageID;
    });
  }

  public async getnavPageConfiguration(pageID: string): Promise<any> {
    const config: RpfConfig<any, any> = await this.getConfig();
    const navConfiguration: any[] = config.navConfiguration.pages;
    return navConfiguration.find(page => {
      return page.pageId === pageID;
    });
  }
}
