import { Component, OnInit } from '@angular/core';
import {systemErrorMessage,loadingIndicatorMessage, pageTitle, fullMonthList} from './../app.constant';
import {HttpService} from '../app.service';
@Component({
  selector: 'app-aggregate-transaction',
  templateUrl: './aggregate-transaction.component.html',
  styleUrls: ['./aggregate-transaction.component.css']
})
export class AggregateTransactionComponent implements OnInit {

  public transactionList = [];
  public isError = false;
  public aggregateDataList = [];
  public errorMessage = systemErrorMessage;
  public loadingMessage = loadingIndicatorMessage;
  public pageTitle = pageTitle;
  public monthList = fullMonthList;
  public isLoading = false;
  
  constructor(private httpService : HttpService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.httpService.getTransactions().subscribe(response => {
        this.transactionList = response;
        this.calculateAgregaetData(this.transactionList);
        this.isError = false;  
        this.isLoading = false; 
    }, error => {
        this.isError = true;
        this.isLoading = false;
    })
  }

  public calculateAgregaetData(transactionList){
      let filteredMonth = [];

      transactionList.forEach(element => {

          let month = element.date.split("/");
          let currentMonth = month[1]+"/"+month[2]
          
          if(filteredMonth.indexOf(currentMonth) == -1){
            filteredMonth.push(currentMonth)
            let transactionDataInSameMonth = transactionList.filter(item => item.date.indexOf(currentMonth) != -1);
            
            let aggregateData = {
              month : `${this.monthList[month[1]]} ${month[2]}`,
              totalIncome : 0,
              totalOutgoings : 0,
              closingBalance : 0,
              customerId : ""
            }
            transactionDataInSameMonth.forEach(element => {
                if(element.paymentType == "debit"){
                  aggregateData.totalOutgoings = Number(aggregateData.totalOutgoings) +  Number(element.amount);
                }
                if(element.paymentType == "credit"){
                  aggregateData.totalIncome = Number(aggregateData.totalIncome) + Number( element.amount);
                }
            });
            aggregateData.closingBalance = transactionDataInSameMonth[transactionDataInSameMonth.length-1].remainingBalance;
            aggregateData.customerId =  element.customerId;
            aggregateData.totalIncome = Number(aggregateData.totalIncome);
            aggregateData.totalOutgoings = Number(aggregateData.totalOutgoings)
            this.aggregateDataList.push(aggregateData);
          }
          
      });

  }

}
