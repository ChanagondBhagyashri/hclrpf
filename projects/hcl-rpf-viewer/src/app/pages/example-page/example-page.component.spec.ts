import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { NxLinkModule } from '@allianz/ngx-ndbx/link';

import { NxIconModule } from '@allianz/ngx-ndbx/icon';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ExamplePageComponent } from './example-page.component';
import { DemoAppPageConfig } from '../../models/page-config.model';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { MockActivatedRoute, NgxPfeTestingModule } from '@allianz/ngx-pfe';
import { NxFormfieldModule } from '@allianz/ngx-ndbx/formfield';
import { FormsModule } from '@angular/forms';
import { NxInputModule } from '@allianz/ngx-ndbx/input';
import { ExamplePageConfig } from './example-page-config.model';

describe('ExamplePageComponent', () => {
  let component: ExamplePageComponent;
  let fixture: ComponentFixture<ExamplePageComponent>;
  let secondConfigValueText;
  let firstConfigValueText;

  const examplePageConfig: ExamplePageConfig = {
    firstConfigValue: 'test',
    secondConfigValue: 'test2'
  };

  const pageConfigRoute = new MockActivatedRoute<DemoAppPageConfig>({
    pageId: 'mockpage',
    examplePageConfig: examplePageConfig
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExamplePageComponent],
      imports: [
        RouterTestingModule,
        NgxPfeTestingModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        NxIconModule,
        NxLinkModule,
        NxInputModule,
        NxFormfieldModule,
        TranslateModule.forRoot()
      ],
      providers: [{ provide: ActivatedRoute, useValue: pageConfigRoute }, { provide: APP_BASE_HREF, useValue: '/' }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    secondConfigValueText = <HTMLElement>fixture.nativeElement.querySelector('#secondConfigValue');
    firstConfigValueText = <HTMLElement>fixture.nativeElement.querySelector('#firstConfigValue');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a text', () => {
    expect(firstConfigValueText.textContent).toContain(component.examplePageConfig.firstConfigValue);
  });

  it('should contain a phone subtitle', () => {
    expect(secondConfigValueText.textContent).toContain(component.examplePageConfig.secondConfigValue);
  });
});
