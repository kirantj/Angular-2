import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectiveAnimationComponent } from './effective-animation.component';

describe('EffectiveAnimationComponent', () => {
  let component: EffectiveAnimationComponent;
  let fixture: ComponentFixture<EffectiveAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EffectiveAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EffectiveAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
