import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromioListComponent } from './fromio-list.component';

describe('FromioListComponent', () => {
  let component: FromioListComponent;
  let fixture: ComponentFixture<FromioListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromioListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
