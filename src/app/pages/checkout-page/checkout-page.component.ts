import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { PaymentInfo, PaymentOption } from '@models/contact-request.model';
import { MatSnackBar, MatStepper } from '@angular/material';
import { MustMatch } from 'src/app/shared/_helpers/must-match.validator';
import { CheckoutFormService } from 'src/app/services/checkout-form.service';
import { Subscription } from 'rxjs';
import { StepperSelectionEvent } from '@angular/cdk/stepper';

@Component({
	selector: 'app-checkout-page',
	templateUrl: './checkout-page.component.html',
	styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit, OnDestroy {

	@ViewChild('stepper') stepper: MatStepper;
	public countries: string[] = ['Canada', 'USA', 'Mexico'];
	public requestTypes: string[] = ['Claim', 'Feedback', 'Help Request'];
	public checkoutForm: FormGroup;
	private _subscriptions = new Subscription;

	constructor(
		private _formBuilder: FormBuilder,
		private _snackBar: MatSnackBar,
		private _checkoutFormService: CheckoutFormService) {
		this.checkoutForm = this.createFormGroup(_formBuilder);
	}

	ngOnInit() {
		// this.output();
		const resetSub = this._checkoutFormService.$resetForm.subscribe(value => {
			if (value) {
				this.resetStepper();
			}
		});
		this._subscriptions.add(resetSub);
	}

	ngOnDestroy() {
		this._subscriptions.unsubscribe();
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

	public get useForBilling(): boolean {
		return this.checkoutForm.controls['useForBilling'].value;
	}

	public createFormGroup(formBuilder: FormBuilder): FormGroup {
		return formBuilder.group({
			shippingAddress: this.createContactGroup(formBuilder),
			useForBilling: new FormControl(false),
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

	public resetCurrent(control: string): void {
		this.checkoutForm.controls[`${control}`].reset();
		this.checkoutForm.controls[`${control}`].setErrors(null);
		this.checkoutForm.controls[`${control}`].markAsUntouched();
		this.checkoutForm.controls[`${control}`].markAsPristine();
		this.checkoutForm.controls[`${control}`].updateValueAndValidity();
	}

	public resetStepper(): void {
		this.stepper.reset();
	}

	public output(): void {
		console.log(this.checkoutForm);
	}

	public stepperChange(event: StepperSelectionEvent) {
		if (event.selectedIndex === 1 && this.useForBilling) {
			(this.billingForm as FormGroup).setValue((this.shippingForm as FormGroup).value);
			(this.billingForm as FormGroup).disable();
			(this.billingForm as FormGroup).markAsTouched();
			(this.billingForm as FormGroup).markAsDirty();
		} else {
			(this.billingForm as FormGroup).enable();
		}
	}
}
