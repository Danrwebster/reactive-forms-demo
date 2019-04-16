import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

	public countries: string[] = ['USA', 'Germany', 'Italy', 'France'];
	public requestTypes: string[] = ['Claim', 'Feedback', 'Help Request'];
	public contactForm: FormGroup;

	constructor() {
		this.contactForm = this.createFormGroup();
	}

	ngOnInit() {
	}

	createFormGroup() {
		return new FormGroup({
			personalData: new FormGroup({
				email: new FormControl(),
				mobile: new FormControl(),
				country: new FormControl()
			}),
			requestType: new FormControl(),
			text: new FormControl()
		});
	}

	onSubmit() {
		console.log('Submit: ', this.contactForm.value);
		this.contactForm.reset();
	}

	revert() {
		this.contactForm.reset();
	}

}
