import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PersonalData, ContactRequest } from '@models/contact-request.model';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

	public countries: string[] = ['USA', 'Germany', 'Italy', 'France'];
	public requestTypes: string[] = ['Claim', 'Feedback', 'Help Request'];
	public contactForm: FormGroup;

	constructor(private _formBuilder: FormBuilder) {
		this.contactForm = this.createFormGroup(_formBuilder);
	}

	ngOnInit() {
	}

	createFormGroup(formBuilder: FormBuilder) {
		return formBuilder.group({
			personalData: formBuilder.group(new PersonalData()),
			requestType: '',
			text: ''
		});
	}

	onSubmit() {
		const result: ContactRequest = Object.assign({}, this.contactForm.value);
		result.personalData = Object.assign({}, result.personalData);
		console.log('Submit: ', result);
		this.contactForm.reset();
	}

	revert() {
		this.contactForm.reset();
	}

}
