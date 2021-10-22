import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieTableLineComponent } from './serie-table-line.component';

describe('SerieTableLineComponent', () => {
  let component: SerieTableLineComponent;
  let fixture: ComponentFixture<SerieTableLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerieTableLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieTableLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
