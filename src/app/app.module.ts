import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
	MatToolbarModule,
	MatIconModule,
	MatFormFieldModule,
	MatInputModule,
	MatSelectModule,
	MatButtonModule,
	MatCardModule,
	MatCheckboxModule,
	MatSnackBarModule,
	MatStepperModule,
	MatDividerModule } from '@angular/material';

import { AppRoutingModule } from '@routing/app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutPageComponent } from '@pages/checkout-page/checkout-page.component';
import { ContactFormComponent } from '@components/contact-form/contact-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
	declarations: [
		AppComponent,
		CheckoutPageComponent,
		ContactFormComponent,
		NavbarComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatIconModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule,
		MatButtonModule,
		MatCardModule,
		MatCheckboxModule,
		MatSnackBarModule,
		MatStepperModule,
		MatDividerModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
