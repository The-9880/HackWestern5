import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordsViewComponent } from './keywords-view.component';

describe('KeywordsViewComponent', () => {
  let component: KeywordsViewComponent;
  let fixture: ComponentFixture<KeywordsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeywordsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
