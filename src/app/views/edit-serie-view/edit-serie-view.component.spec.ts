import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSerieViewComponent } from './edit-serie-view.component';

describe('EditSerieViewComponent', () => {
  let component: EditSerieViewComponent;
  let fixture: ComponentFixture<EditSerieViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSerieViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSerieViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
