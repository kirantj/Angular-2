import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatLoopComponent } from './repeat-loop.component';

describe('RepeatLoopComponent', () => {
  let component: RepeatLoopComponent;
  let fixture: ComponentFixture<RepeatLoopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepeatLoopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepeatLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
