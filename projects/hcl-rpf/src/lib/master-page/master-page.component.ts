import { Component, OnInit, ContentChild, TemplateRef, Directive, Input } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationService } from '../services/navigation.service';
import { BusinessService } from '../services/business.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'lib-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.css']
})

export class MasterPageComponent implements OnInit {
  // Unfortunately, the template context has to be provided in the template as separate objects.
  /**
   * References to templates passed as ng-content
   */
  @ContentChild('navigationTemplate', { read: TemplateRef, static: true })
  public navigationTemplate: TemplateRef<any> = null;

  @ContentChild('errorMessageTemplate', { read: TemplateRef, static: true })
  public errorMessageTemplate: TemplateRef<any> = null;

  @ContentChild('noConfigMessageTemplate', { read: TemplateRef, static: true })
  public noConfigMessageTemplate: TemplateRef<any> = null;

  @ContentChild('pageOutlet', { read: TemplateRef, static: true })
  public pageOutlet: TemplateRef<any> = null;

  @ContentChild('headerTemplate', { read: TemplateRef, static: true })
  public headerTemplate: TemplateRef<any> = null;

  @ContentChild('footerTemplate', { read: TemplateRef, static: true })
  public footerTemplate: TemplateRef<any> = null;

  ngAfterContentInit() {
    
  }
  
  constructor(private NavigationService: NavigationService, private router: Router,) {     
    console.log("in master ts", NavigationService);
  }

  ngOnInit() {
  }
  goBack() {
    const a =this.NavigationService.applicationId[0].pageId;
    console.log(a);
    this.router.navigate([a])
    }
    goForward(){
      const a =this.NavigationService.applicationId[0].nextOptionList[0].nextPageId;
      console.log(a);
      this.router.navigate([a])
    }
}
