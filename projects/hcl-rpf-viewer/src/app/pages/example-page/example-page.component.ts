import { Component, OnInit } from '@angular/core';
import { ExamplePageConfig } from './example-page-config.model';
import { ActivatedRoute } from '@angular/router';
import { BusinessService } from '../../../../../hcl-rpf/src/public-api'
import { DemoAppPageConfig } from '../../models/page-config.model';

@Component({
  selector: 'app-example-page',
  templateUrl: './example-page.component.html',
  styleUrls: ['./example-page.component.scss']
})
export class ExamplePageComponent implements OnInit {
  private EXAMPLEKEY = 'inputFieldID';

  textFieldStateValue: string;

  private pageConfig: DemoAppPageConfig;
  examplePageConfig: ExamplePageConfig;

  constructor(private activatedRoute: ActivatedRoute, private rpfBusinessService: BusinessService<DemoAppPageConfig>) {
    // Get the page configuration from the activatedRoute:
    this.pageConfig = this.rpfBusinessService.getPageConfigFromRoute(this.activatedRoute);
    this.examplePageConfig = this.pageConfig.examplePageConfig;

    // It is also possible to subscribe to the pageConfig:
    this.activatedRoute.data.subscribe(myPageConfig => {
      console.log(`subscribe: ${myPageConfig}`);
    });
  }

  ngOnInit(): void {
    // The pfeBusinessService can be used to set the page validitiy:
    //this.rpfBusinessService.setPageStatus(true);


  }

  public textFieldChange(value: string) {
    //this.rpfBusinessService.storeValue(this.EXAMPLEKEY, value);
  }
}
