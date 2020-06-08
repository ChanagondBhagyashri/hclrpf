
import {NavigationService} from '../services/navigation.service'
import { Component, OnInit, ContentChild, TemplateRef, Input } from '@angular/core';


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
  

  @ContentChild('errorMessageTemplate', { read: TemplateRef, static: true })
  public errorMessageTemplate: TemplateRef<any> = null;

  @ContentChild('noConfigMessageTemplate', { read: TemplateRef, static: true })
  public noConfigMessageTemplate: TemplateRef<any> = null;

  @ContentChild('pageOutlet', { read: TemplateRef, static: true })
  public pageOutlet: TemplateRef<any> = null;


  constructor(
    private navService: NavigationService
  ) { }


  ngOnInit() {
   
  }


  public async navigateNext() {
    console.log(this.navService)
    await this.navService.navigateNext();
  }
  public async navigateBack() {
   
    await this.navService.navigateBack();
  }

  @Input() footerTemplate
  @Input() headerTemplate
  @Input() navigationTemplate


}
