import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentsComponent } from './components/payments/payments.component';

const routes: Routes = [
  { path: 'payment', component: PaymentsComponent },
  { path: '', redirectTo: '/payment', pathMatch: 'full' } // optional default redirect
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
