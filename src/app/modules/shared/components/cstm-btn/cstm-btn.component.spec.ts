import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CstmBtnComponent } from './cstm-btn.component';

describe('CstmBtnComponent', () => {
  let component: CstmBtnComponent;
  let fixture: ComponentFixture<CstmBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CstmBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CstmBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
