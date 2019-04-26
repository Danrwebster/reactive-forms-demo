import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CheckoutFormService {

	public $resetForm = new Subject<boolean>();

	constructor() { }

	public resetForm(): void {
		this.$resetForm.next(true);
	}
}
