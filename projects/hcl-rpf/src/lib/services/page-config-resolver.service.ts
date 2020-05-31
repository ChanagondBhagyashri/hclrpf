import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { ConfigService } from './config.service';
import { NavigationService } from './navigation.service';
import { PageConfig } from '../models/page-config.model';

@Injectable()
export class RPFPageConfigResolver implements Resolve<PageConfig> {
  constructor(private router: Router, private configService: ConfigService, private NavigationService: NavigationService) {}

  resolve(activatedRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<PageConfig> {
    return this.configService.getPageConfiguration(activatedRoute.routeConfig.path);
  }
}
