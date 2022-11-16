import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitHistoryComponent } from './benefit-history.component';

describe('BenefitHistoryComponent', () => {
  let component: BenefitHistoryComponent;
  let fixture: ComponentFixture<BenefitHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenefitHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
