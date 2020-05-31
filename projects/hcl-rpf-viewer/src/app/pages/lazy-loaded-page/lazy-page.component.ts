import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusinessService } from '../../../../../hcl-rpf/src/public-api'
import { LazyLoadedPageConfig } from './lazy-page-config.model';
import { DemoAppPageConfig } from '../../models/page-config.model';


@Component({
  templateUrl: './lazy-page.component.html',
  styleUrls: ['./lazy-page.component.scss']
})
export class LazyPageComponent implements OnInit {

  private EXAMPLEKEY = 'testID';

  private pageConfig: DemoAppPageConfig;
  lazyLoadedPageConfig: LazyLoadedPageConfig;

  textField: EventEmitter<string> = new EventEmitter<string>();
  textFieldStateValue: string;

  constructor(private activatedRoute: ActivatedRoute, private pfeBusinessService: BusinessService <DemoAppPageConfig>) {
    this.pageConfig = this.pfeBusinessService.getPageConfigFromRoute(this.activatedRoute);
    this.lazyLoadedPageConfig = this.pageConfig.lazyLoadedPage;
  }

  ngOnInit(): void {

  }

  public textFieldChange(value: string) {
   // this.pfeBusinessService.storeValue(this.EXAMPLEKEY, value);
  }
}
