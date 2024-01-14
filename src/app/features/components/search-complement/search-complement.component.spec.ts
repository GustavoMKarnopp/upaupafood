import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComplementComponent } from './search-complement.component';

describe('SearchComplementComponent', () => {
  let component: SearchComplementComponent;
  let fixture: ComponentFixture<SearchComplementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComplementComponent]
    });
    fixture = TestBed.createComponent(SearchComplementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
