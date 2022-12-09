import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DimageComponent } from './dimage.component';

describe('DimageComponent', () => {
  let component: DimageComponent;
  let fixture: ComponentFixture<DimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DimageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
