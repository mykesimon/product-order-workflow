import { ProductsData } from '../types';

// NOTE: This is not perfect as if the price grows the fn become a bit
// sketchy but it does the job for the price received in the tech
export const formatPriceWithCommas = (number: string | number) => {
	const numberString = number.toString();

	// Extract the last two digits
	const lastTwoDigits = numberString.slice(-2);

	// Remove the last two digits from the original string
	const stringWithoutLastTwoDigits = numberString.slice(0, -2);

	// Insert a comma before the last two digits
	const formattedNumber = `${stringWithoutLastTwoDigits},${lastTwoDigits}`;

	return formattedNumber;
};

export const findDefaultVariant = (id: string, productList: ProductsData[]) => {
	return productList.find(product => product.id === id);
};

export const isEmailValid = (email: string): boolean => {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const isPhoneValid = (phone: string): boolean => {
	return /^[0-9]+$/.test(phone);
};

export const generateInputId = (string: string): string => {
	return string.toLocaleLowerCase().replace(' ', '-');
};
