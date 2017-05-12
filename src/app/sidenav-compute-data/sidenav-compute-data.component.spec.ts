import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavComputeDataComponent } from './sidenav-compute-data.component';

describe('SidenavComputeDataComponent', () => {
  let component: SidenavComputeDataComponent;
  let fixture: ComponentFixture<SidenavComputeDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavComputeDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavComputeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
