import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomemoduleComponent } from './home-module.component';

describe('HomemoduleComponent', () => {
  let component: HomemoduleComponent;
  let fixture: ComponentFixture<HomemoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomemoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomemoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
