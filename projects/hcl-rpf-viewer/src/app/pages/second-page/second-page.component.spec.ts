import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { SecondPageComponent } from './second-page.component';
import { ActivatedRoute } from '@angular/router';
import { DemoAppPageConfig } from '../../models/page-config.model';
import { RouterTestingModule } from '@angular/router/testing';

describe('ExamplePageComponent', () => {
  let component: SecondPageComponent;
  let fixture: ComponentFixture<SecondPageComponent>;
  let anotherConfigValueText;
  let someConfigValueText;

  const secondPageConfig = {
    someConfigValue: 'test',
    anotherConfigValue: 'test2'
  };

  const pageConfigRoute = new MockActivatedRoute<DemoAppPageConfig>({
    pageId: 'mockpage',
    secondPageConfig: secondPageConfig
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SecondPageComponent],
      imports: [
        RouterTestingModule,
        NgxPfeTestingModule,
        BrowserModule,
        HttpClientModule,
        NxIconModule,
        NxLinkModule,
        TranslateModule.forRoot()
      ],
      providers: [{ provide: ActivatedRoute, useValue: pageConfigRoute }, { provide: APP_BASE_HREF, useValue: '/' }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    someConfigValueText = <HTMLElement>fixture.nativeElement.querySelector('#someConfigValue');
    anotherConfigValueText = <HTMLElement>fixture.nativeElement.querySelector('#anotherConfigValue');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a text', () => {
    expect(someConfigValueText.textContent).toContain(component.secondPageConfig.someConfigValue);
  });

  it('should contain a phone subtitle', () => {
    expect(anotherConfigValueText.textContent).toContain(component.secondPageConfig.anotherConfigValue);
  });
});
