import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSerieViewComponent } from './single-serie-view.component';

describe('SingleSerieViewComponent', () => {
  let component: SingleSerieViewComponent;
  let fixture: ComponentFixture<SingleSerieViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleSerieViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSerieViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
