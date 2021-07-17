import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './app.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AggregateTransactionComponent } from './aggregate-transaction/aggregate-transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    AggregateTransactionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
