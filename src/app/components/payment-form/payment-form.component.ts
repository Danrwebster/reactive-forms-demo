import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'app-payment-form',
	templateUrl: './payment-form.component.html',
	styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit {

	@Input() form: FormGroup;

	constructor() { }

	ngOnInit() {
	}

}
