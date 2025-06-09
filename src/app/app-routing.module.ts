import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentsComponent } from './components/payments/payments.component';
import { RecordsComponent } from './components/records/records.component';

const routes: Routes = [
  { path: 'payment', component: PaymentsComponent },
  { path: 'records', component: RecordsComponent },
  { path: '', redirectTo: '/payment', pathMatch: 'full' },
  { path: '**', redirectTo: '/payment' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
