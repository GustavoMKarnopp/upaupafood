import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetiradaComponent } from './retirada.component';

describe('RetiradaComponent', () => {
  let component: RetiradaComponent;
  let fixture: ComponentFixture<RetiradaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetiradaComponent]
    });
    fixture = TestBed.createComponent(RetiradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
