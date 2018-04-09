import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedinHeaderModuleComponent } from './loggedin-header-module.component';

describe('HeaderModuleComponent', () => {
  let component: LoggedinHeaderModuleComponent;
  let fixture: ComponentFixture<LoggedinHeaderModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedinHeaderModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedinHeaderModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
