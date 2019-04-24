import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
	MatToolbarModule,
	MatFormFieldModule,
	MatInputModule,
	MatSelectModule,
	MatButtonModule,
	MatCardModule,
	MatCheckboxModule,
	MatSnackBarModule,
	MatStepperModule } from '@angular/material';

import { AppRoutingModule } from '@routing/app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutPageComponent } from '@pages/checkout-page/checkout-page.component';
import { ContactFormComponent } from '@components/contact-form/contact-form.component';

@NgModule({
	declarations: [
		AppComponent,
		CheckoutPageComponent,
		ContactFormComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule,
		MatButtonModule,
		MatCardModule,
		MatCheckboxModule,
		MatSnackBarModule,
		MatStepperModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
