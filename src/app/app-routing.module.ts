import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
	{ path: '', component: ContactComponent },
	{ path: '**', redirectTo: '/', pathMatch: 'full' },
	{ path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
