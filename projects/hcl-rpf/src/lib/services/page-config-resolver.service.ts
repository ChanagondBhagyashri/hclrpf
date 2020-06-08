import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { ConfigService } from './config.service';
import { PageConfig } from '../models/page-config.model';
import {PageNavigationConfiguration} from '../models/navigation-config.model'

@Injectable()
export class RPFPageConfigResolver implements Resolve<PageConfig> {
  constructor(private router: Router, private configService: ConfigService) {}

  resolve(activatedRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<PageConfig> {
    return this.configService.getPageConfiguration(activatedRoute.routeConfig.path);
  }
}

@Injectable()
export class RPFNavPageConfigResolver implements Resolve<PageNavigationConfiguration> {
  constructor(private router: Router, private configService: ConfigService) {}

  resolve(activatedRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<PageNavigationConfiguration> {    
   return this.configService.getnavPageConfiguration(activatedRoute.routeConfig.path);
  }
}

