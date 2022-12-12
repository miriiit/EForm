import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingIconBComponent } from './loading-icon-b.component';

describe('LoadingIconBComponent', () => {
  let component: LoadingIconBComponent;
  let fixture: ComponentFixture<LoadingIconBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingIconBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingIconBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
