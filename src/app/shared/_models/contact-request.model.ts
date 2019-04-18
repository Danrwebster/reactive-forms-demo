export class PaymentInfo {
	shippingAddress: CustomerContact;
	billingAddress: CustomerContact;
	paymentOption: PaymentOption;
}

export class CustomerContact {
	firstName: string = '';
	lastName: string = '';
	address: Address;
	email: string = '';
	phone: string = '';
}

export class Address {
	address1: string = '';
	address2: string = '';
	city: string = '';
	province: string = '';
	postalCode: string = '';
}

export class PaymentOption {
	cardNumber: string = '';
	cardType: string = '';
	expireyDate: ExpireyDate;
}

export class ExpireyDate {
	month: string = '';
	year: string = '';
}
