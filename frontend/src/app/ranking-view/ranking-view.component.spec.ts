import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingViewComponent } from './ranking-view.component';

describe('RankingViewComponent', () => {
  let component: RankingViewComponent;
  let fixture: ComponentFixture<RankingViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
