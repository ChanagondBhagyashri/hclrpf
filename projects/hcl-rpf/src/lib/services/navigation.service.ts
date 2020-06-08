import { Injectable } from '@angular/core';

import {  NavOptionConfig, PageNavigationConfiguration } from '../models/navigation-config.model';
import { RpfConfig, PageConfig } from '../models/page-config.model';
import { ConfigService } from './config.service'
import { Router, NavigationEnd, UrlSegment  } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  public currentPageId$ :any;
  public findURLValue: any;
  private previousUrl: string;
  private currentUrl: string;
  private routeHistory: any =[];
  private aaa :any;
  constructor(
    private router: Router,
    private configService: ConfigService) { 
      router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {                 
          this.previousUrl = this.currentUrl;
          this.currentUrl = event.url;                
        };
      });

     
    }


  /**
   * Navigate to the next page.
   * Executes the service activators first.
   * {@link PfeNavigationService.navigate}
   */
  public async navigateNext() {
    return await this._navigateNext();
  }

  private async _navigateNext() {       
    this.findURLValue = this.router.url.split('/');
    this.findURLValue = this.findURLValue.filter(function(e){return e});
    this.currentPageId$ = new BehaviorSubject<string>(this.findURLValue[0])    
    const pageNavConfig: PageNavigationConfiguration = await this.configService.getnavPageConfiguration(
      this.currentPageId$.value
    );
   
  
    if (pageNavConfig && pageNavConfig.nextOptionList && pageNavConfig.nextOptionList.length !== 0) {
      let nextPage = pageNavConfig.nextOptionList[0];
      try {
        const urlSegments = this.router.url.split('/');
        urlSegments.pop();
        urlSegments.push(nextPage.nextPageId);
        this.routeHistory.push(this.currentPageId$.value);
        this.router.navigate(urlSegments);
      } catch (error) {
        // Error handling is done in httpErrorHandler
        return Promise.resolve(undefined);
      }
    }
    
  }

  public async navigateBack() {    
   return await this._navigateBack();
  }
  private async _navigateBack() {  
    let routeHistoryIndex = this.routeHistory.length-1;
    try {
      this.previousUrl = this.routeHistory[routeHistoryIndex];
      const urlSegments = this.previousUrl.split('/');
      urlSegments.filter(function(e){return e}); 
      this.routeHistory.pop();        
      this.router.navigate(urlSegments);      
    } catch (error) {
      // Error handling is done in httpErrorHandler
      return Promise.resolve(undefined);
    }    
}
ngOnInit() {
  console.log(this.currentUrl)
}

}