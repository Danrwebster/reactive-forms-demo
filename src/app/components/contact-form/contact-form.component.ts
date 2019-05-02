import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'app-contact-form',
	templateUrl: './contact-form.component.html',
	styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

	@Input() form: FormGroup;
	@Input() formType: string;

	constructor() { }

	ngOnInit() {
	}

	public labelPrefix(content: string): string {
		return this.formType + ' ' + content;
	}

}
