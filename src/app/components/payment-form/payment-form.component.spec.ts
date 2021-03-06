import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentFormComponent } from './payment-form.component';

describe('PaymentFromComponent', () => {
	let component: PaymentFormComponent;
	let fixture: ComponentFixture<PaymentFormComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PaymentFormComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PaymentFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
