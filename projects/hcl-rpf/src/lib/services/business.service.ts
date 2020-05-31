import { Injectable } from '@angular/core';
import { PageConfig } from '../models/page-config.model'
import { ActivatedRoute } from '@angular/router';

export const PAGE_CONFIG_ROUTE_ATTRIBUTE_NAME = 'pageConfig';

@Injectable({
  providedIn: 'root'
})
export class BusinessService<PAGE_CONFIG_TYPE extends PageConfig = PageConfig> {

  constructor() { }

  public getPageConfigFromRoute(activatedRoute: ActivatedRoute): PAGE_CONFIG_TYPE {
    return activatedRoute.snapshot.data[PAGE_CONFIG_ROUTE_ATTRIBUTE_NAME];
  }
}
