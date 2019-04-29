import { FormGroup } from '@angular/forms';

// custom validator to check that two fields match
export function LuhnAlgorithm(cardNumber: string) {
	return (formGroup: FormGroup) => {
		let sum = 0;
		let shouldDouble = false;
		// loop through values starting at the rightmost side
		for (let i = cardNumber.length - 1; i >= 0; i--) {
			let digit = parseInt(cardNumber.charAt(i), 10);

			if (shouldDouble) {
				if ((digit *= 2) > 9) {
					digit -= 9;
				}
			}

			sum += digit;
			shouldDouble = !shouldDouble;
		}
		return (sum % 10) === 0;
	};
}
