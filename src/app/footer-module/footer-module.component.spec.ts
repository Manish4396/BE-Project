import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterModuleComponent } from './footer-module.component';

describe('FooterModuleComponent', () => {
  let component: FooterModuleComponent;
  let fixture: ComponentFixture<FooterModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
