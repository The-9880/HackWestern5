import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformedSearchComponent } from './informed-search.component';

describe('InformedSearchComponent', () => {
  let component: InformedSearchComponent;
  let fixture: ComponentFixture<InformedSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformedSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
