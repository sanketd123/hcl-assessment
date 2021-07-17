import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggregateTransactionComponent } from './aggregate-transaction.component';

describe('AggregateTransactionComponent', () => {
  let component: AggregateTransactionComponent;
  let fixture: ComponentFixture<AggregateTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggregateTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggregateTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate aggregate data', ()=>{
      let stubTransaction = [
        {
          "customerId": 45785456,
          "transactionDescription": "Loan EMI",
          "amount": "100",
          "paymentType": "debit",
          "date" : "11/05/2021",
          "remainingBalance" : "1200"
        }];

        component.aggregateDataList = [];
        component.calculateAgregaetData(stubTransaction);
        expect(component.aggregateDataList.length).not.toEqual(0);
  });

  it('should check content is loaded',()=>{
      component.isLoading = true;
      component.ngOnInit();
      expect(component.isLoading).toBe(false)
  });

});
