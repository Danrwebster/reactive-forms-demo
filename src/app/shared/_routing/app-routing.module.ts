import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutPageComponent } from '@pages/checkout-page/checkout-page.component';

const routes: Routes = [
	{ path: '', component: CheckoutPageComponent },
	{ path: '**', redirectTo: '/', pathMatch: 'full' },
	{ path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
