import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HSkeletonComponent } from './h-skeleton.component';

describe('HSkeletonComponent', () => {
  let component: HSkeletonComponent;
  let fixture: ComponentFixture<HSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HSkeletonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
