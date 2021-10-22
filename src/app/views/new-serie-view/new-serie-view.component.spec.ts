import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSerieViewComponent } from './new-serie-view.component';

describe('NewSerieViewComponent', () => {
  let component: NewSerieViewComponent;
  let fixture: ComponentFixture<NewSerieViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSerieViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSerieViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
