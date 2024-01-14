import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplementProdComponent } from './complement-prod.component';

describe('ComplementProdComponent', () => {
  let component: ComplementProdComponent;
  let fixture: ComponentFixture<ComplementProdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComplementProdComponent]
    });
    fixture = TestBed.createComponent(ComplementProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
