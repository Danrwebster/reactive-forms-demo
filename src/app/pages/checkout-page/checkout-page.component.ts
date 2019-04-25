import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { PaymentInfo, PaymentOption } from '@models/contact-request.model';
import { MatSnackBar, MatStepper } from '@angular/material';
import { MustMatch } from 'src/app/shared/_helpers/must-match.validator';

@Component({
	selector: 'app-checkout-page',
	templateUrl: './checkout-page.component.html',
	styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {

	@ViewChild('stepper') stepper: MatStepper;
	public countries: string[] = ['Canada', 'USA', 'Mexico'];
	public requestTypes: string[] = ['Claim', 'Feedback', 'Help Request'];
	public checkoutForm: FormGroup;

	constructor(
		private _formBuilder: FormBuilder,
		private _snackBar: MatSnackBar) {
		this.checkoutForm = this.createFormGroup(_formBuilder);
	}

	ngOnInit() {
		this.output();
	}

	public get shippingForm(): AbstractControl {
		return this.checkoutForm.get('shippingAddress');
	}

	public get billingForm(): AbstractControl {
		return this.checkoutForm.get('billingAddress');
	}

	public get paymentForm(): AbstractControl {
		return this.checkoutForm.get('paymentOption');
	}

	public createFormGroup(formBuilder: FormBuilder): FormGroup {
		return formBuilder.group({
			shippingAddress: this.createContactGroup(formBuilder),
			billingAddress: this.createContactGroup(formBuilder),
			paymentOption: this.createPaymentGroup(formBuilder)
		});
	}

	public createContactGroup(formBuilder: FormBuilder): FormGroup {
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

	public createPaymentGroup(formBuilder: FormBuilder): FormGroup {
		return formBuilder.group({
			cardNumber: ['', Validators.required],
			cardType: ['', Validators.required],
			expireyDate: formBuilder.group({
				month: ['', Validators.required],
				year: ['', Validators.required],
			})
		});
	}

	public onSubmit(): void {
		const result: PaymentInfo = Object.assign({}, this.checkoutForm.value);
		result.shippingAddress = Object.assign({}, result.shippingAddress);
		result.shippingAddress.address = Object.assign({}, result.shippingAddress.address);

		result.billingAddress = Object.assign({}, result.billingAddress);
		result.billingAddress.address = Object.assign({}, result.billingAddress.address);

		result.paymentOption = Object.assign({}, result.paymentOption);
		result.paymentOption.expireyDate = Object.assign({}, result.paymentOption.expireyDate);

		// console.log('Submit: ', result);
		this._snackBar.open('Form Submitted Successfully', '', {
			duration: 2000,
		});
		this.checkoutForm.reset();
		this.checkoutForm.markAsPristine();
		this.checkoutForm.markAsUntouched();
		this.checkoutForm.updateValueAndValidity();
	}

	public reset(control: string): void {
		// ((this.checkoutForm.controls[`${control}`] as FormGroup).controls['address']).reset();
		// ((this.checkoutForm.controls[`${control}`] as FormGroup).controls['address']).setErrors(null);
		// ((this.checkoutForm.controls[`${control}`] as FormGroup).controls['address']).markAsUntouched();
		// ((this.checkoutForm.controls[`${control}`] as FormGroup).controls['address']).markAsPristine();
		// ((this.checkoutForm.controls[`${control}`] as FormGroup).controls['address']).updateValueAndValidity();
		// this.checkoutForm.controls[`${control}`].reset();
		// this.checkoutForm.controls[`${control}`].setErrors(null);
		// this.checkoutForm.controls[`${control}`].markAsUntouched();
		// this.checkoutForm.controls[`${control}`].markAsPristine();
		// this.checkoutForm.controls[`${control}`].updateValueAndValidity();
		(this.shippingForm as FormGroup).reset();
		(this.shippingForm as FormGroup).setErrors(null);
		(this.shippingForm as FormGroup).markAsUntouched();
		(this.shippingForm as FormGroup).markAsPristine();
		(this.shippingForm as FormGroup).updateValueAndValidity();
	}

	public output(): void {
		// console.log(this.checkoutForm);
		console.log(this.shippingForm);
	}
}
