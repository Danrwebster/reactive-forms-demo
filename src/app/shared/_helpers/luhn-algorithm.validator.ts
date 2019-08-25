import { FormGroup } from '@angular/forms';

// custom validator to check that two fields match
export function LuhnAlgorithm(cardNumber: string) {
	return (formGroup: FormGroup) => {
		const cardNumberControl = formGroup.controls[cardNumber];

		let sum = 0;
		let shouldDouble = false;
		// loop through values starting at the rightmost side
		for (let i = cardNumberControl.value.length - 1; i >= 0; i--) {
			let digit = parseInt(cardNumberControl.value.charAt(i), 10);

			if (shouldDouble) {
				if ((digit *= 2) > 9) {
					digit -= 9;
				}
			}

			sum += digit;
			shouldDouble = !shouldDouble;
		}

		// set error on matchingControl if validation fails
		if ((sum % 10) !== 0) {
			cardNumberControl.setErrors({ LuhnAlgorithm: true });
		} else {
			cardNumberControl.setErrors(null);
		}
	};
}
