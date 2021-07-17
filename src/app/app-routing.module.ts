import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AggregateTransactionComponent} from '../app/aggregate-transaction/aggregate-transaction.component'
const routes: Routes = [
  { path: 'app', component: AggregateTransactionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
