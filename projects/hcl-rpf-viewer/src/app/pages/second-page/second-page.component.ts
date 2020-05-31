import { Component, OnInit } from '@angular/core';
import { SecondPageConfig } from './second-page-config.model';
import { ActivatedRoute } from '@angular/router';
import { BusinessService } from '../../../../../hcl-rpf/src/public-api'
import { DemoAppPageConfig } from '../../models/page-config.model';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {
  secondPageConfig: SecondPageConfig;

  constructor(private activatedRoute: ActivatedRoute, private pfeBusinessService: BusinessService <DemoAppPageConfig>) {
  }

  ngOnInit(): void {
    const pageConfig: DemoAppPageConfig = this.pfeBusinessService.getPageConfigFromRoute(this.activatedRoute);
    this.secondPageConfig = pageConfig.secondPageConfig;

    //this.pfeBusinessService.storeValue(pageConfig.pageId, true);
  }
}
