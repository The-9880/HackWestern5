import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcesViewComponent } from './sources-view.component';

describe('SourcesViewComponent', () => {
  let component: SourcesViewComponent;
  let fixture: ComponentFixture<SourcesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
