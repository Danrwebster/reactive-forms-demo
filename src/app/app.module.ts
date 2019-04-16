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
	MatSnackBarModule } from '@angular/material';

import { AppRoutingModule } from '@routing/app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from '@components/contact/contact.component';

@NgModule({
	declarations: [
		AppComponent,
		ContactComponent
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
		MatSnackBarModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
