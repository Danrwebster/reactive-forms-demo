import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PaymentInfo, PaymentOption } from '@models/contact-request.model';
import { MatSnackBar } from '@angular/material';
import { MustMatch } from 'src/app/shared/_helpers/must-match.validator';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

	public countries: string[] = ['Canada', 'USA', 'Mexico'];
	public requestTypes: string[] = ['Claim', 'Feedback', 'Help Request'];
	public paymentForm: FormGroup;

	constructor(
		private _formBuilder: FormBuilder,
		private _snackBar: MatSnackBar) {
		this.paymentForm = this.createFormGroup(_formBuilder);
	}

	ngOnInit() {
	}

	createFormGroup(formBuilder: FormBuilder): FormGroup {
		return formBuilder.group({
			shippingAddress: this.createContactGroup(formBuilder),
			billingAddress: this.createContactGroup(formBuilder),
			paymentOption: this.createPaymentGroup(formBuilder)
		});
	}

	createContactGroup(formBuilder: FormBuilder): FormGroup {
		return formBuilder.group({
			firstName: ['', Validators.required],
			lastName: ['', Validators.required],
			address: formBuilder.group({
				address1: ['', Validators.required],
				address2: [''],
				city: ['', Validators.required],
				province: ['', Validators.required],
				postalCode: ['', [Validators.required,
				// tslint:disable-next-line:max-line-length
				Validators.pattern('^[ABCEGHJ-NPRSTVXY|abceghj-nprstvxy][0-9][ABCEGHJ-NPRSTV-Z|abceghj-nprstv-z] ?[0-9][ABCEGHJ-NPRSTV-Z|abceghj-nprstv-z][0-9]$')]]
			}),
			email: ['', [Validators.required, Validators.email]],
			confirmEmail: ['', Validators.required],
			phone: ['', Validators.required]
		}, {
				validator: MustMatch('email', 'confirmEmail')
			}
		);
	}

	createPaymentGroup(formBuilder: FormBuilder): FormGroup {
		return formBuilder.group({
			cardNumber: ['', Validators.required],
			cardType: ['', Validators.required],
			expireyDate: formBuilder.group({
				month: ['', Validators.required],
				year: ['', Validators.required],
			})
		});
	}

	onSubmit() {
		const result: PaymentInfo = Object.assign({}, this.paymentForm.value);
		result.shippingAddress = Object.assign({}, result.shippingAddress);
		result.shippingAddress.address = Object.assign({}, result.shippingAddress.address);

		result.billingAddress = Object.assign({}, result.billingAddress);
		result.billingAddress.address = Object.assign({}, result.billingAddress.address);

		result.paymentOption = Object.assign({}, result.paymentOption);
		result.paymentOption.expireyDate = Object.assign({}, result.paymentOption.expireyDate);

		console.log('Submit: ', result);
		this._snackBar.open('Form Submitted Successfully', '', {
			duration: 2000,
		});
		this.paymentForm.reset();
		this.paymentForm.markAsPristine();
		this.paymentForm.markAsUntouched();
		this.paymentForm.updateValueAndValidity();
	}

	reset() {
		this.paymentForm.reset();
	}

}
