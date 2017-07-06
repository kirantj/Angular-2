import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceHttComponent } from './service-htt.component';

describe('ServiceHttComponent', () => {
  let component: ServiceHttComponent;
  let fixture: ComponentFixture<ServiceHttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceHttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceHttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
