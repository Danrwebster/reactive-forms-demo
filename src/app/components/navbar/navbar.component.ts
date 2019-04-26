import { Component, OnInit, Input } from '@angular/core';
import { CheckoutFormService } from 'src/app/services/checkout-form.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	@Input() title: string;

	constructor(private _checkoutFormService: CheckoutFormService) { }

	ngOnInit() {
	}

	public resetStepper(): void {
		this._checkoutFormService.resetForm();
	}

}
