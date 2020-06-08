import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';
import { RpfConfig } from '../models/page-config.model';
import { PfePageMappingService } from './page-mapping-service.service';
import { PageDefinition } from '../models/page-definition.model';
import { RPFPageConfigResolver, RPFNavPageConfigResolver } from './page-config-resolver.service';
import {PageNavigationConfiguration} from '../models/navigation-config.model'

@Injectable({
  providedIn: 'root'
})
export class RPFGuardServiceGuard implements CanActivate {
  constructor(
    public router: Router,
    private configService: ConfigService,
    private pageMappingService:  PfePageMappingService
  ) {}
  async canActivate(
    activatedRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
      if (activatedRoute.routeConfig.children) {
        // Navigate to first child:
        if (activatedRoute.children.length === 0) {
          //const firstPage: string = await this.pfeNavigationService.getFirstPageOrErrorPage();
          //this.router.navigate([state.url, firstPage], { replaceUrl: true });
        }
        return Promise.resolve(true);
      }

      let config: RpfConfig;
      try {
        config =  await this.configService.getConfig();
      } catch (error) {
        // Loading the config failed. Child routes cannot be generated. Master Page will trigger an error state to show an error message
        return true;
      }

      const pfeChildRoutes = this.generatePFERoutingConfig(config);
      activatedRoute.parent.routeConfig.children = pfeChildRoutes;
      activatedRoute.parent.routeConfig.canActivate = [RPFGuardServiceGuard];
      //TODO: make it as a config
      const firstPage: string = 'welcomePage';
      this.navigateToPageID(state, activatedRoute, firstPage);

    }

    private navigateToPageID(state: RouterStateSnapshot, activatedRoute: ActivatedRouteSnapshot, pageID: string) {
      if (activatedRoute.url.length > 0) {
        this.navigateToChildOnSameLevel(state, activatedRoute, pageID);
      } else {
        this.router.navigate([state.url, pageID], { replaceUrl: true });
      }
    }

    private navigateToChildOnSameLevel(state: RouterStateSnapshot, activatedRoute: ActivatedRouteSnapshot, pageID: string) {
      const parentUrl = state.url.slice(0, state.url.indexOf(activatedRoute.url[activatedRoute.url.length - 1].path));
      this.router.navigate([parentUrl, pageID], { replaceUrl: true });
    }

    private generatePFERoutingConfig(pfeConfig: RpfConfig): Route[] {
      const routerConfig: Route[] = [];

      if (pfeConfig.pagesConfiguration) {
        pfeConfig.pagesConfiguration.forEach(page => {
          const pageDefinition: PageDefinition = this.pageMappingService.getPageDefinition(page);

          if (pageDefinition) {
            const route: Route = {
              path: page.pageId,
              data: {
                pfePage: true
              },
              resolve: {
                pageConfig: RPFPageConfigResolver,
                PageNavigationConfiguration: RPFNavPageConfigResolver
              }
            };
            if (pageDefinition.pageComponent) {
              route.component = pageDefinition.pageComponent;
            } else {
              route.loadChildren = pageDefinition.lazyPageRoute.loadChildren;
            }
            routerConfig.push(route);
          } else {
            //if (this.logger) {
            //  this.logger.errorToServer(`generatePFERoutingConfig: PageType used in configuration not found: `, page);
            //}
          }
        });
      }
      return routerConfig;
    }

}
