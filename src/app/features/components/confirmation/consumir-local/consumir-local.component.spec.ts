import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumirLocalComponent } from './consumir-local.component';

describe('ConsumirLocalComponent', () => {
  let component: ConsumirLocalComponent;
  let fixture: ComponentFixture<ConsumirLocalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsumirLocalComponent]
    });
    fixture = TestBed.createComponent(ConsumirLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
