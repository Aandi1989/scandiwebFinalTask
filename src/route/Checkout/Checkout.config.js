import { SHIPPING_STEP, BILLING_STEP, DETAILS_STEP, CHECKOUT_URL, PAYMENT_TOTALS, UPDATE_EMAIL_CHECK_FREQUENCY } from 'SourceRoute/Checkout/Checkout.config';

const PRECESSED_STEPS = [
	{
		id: 1,
		order: 1,
		title: 'Shipping',
		currentPathName: '/checkout/shipping',
	},
	{
		id: 2,
		order: 2,
		title: 'Review & Payments',
		currentPathName: '/checkout/billing',
	},
];

export { SHIPPING_STEP, BILLING_STEP, DETAILS_STEP, CHECKOUT_URL, PAYMENT_TOTALS, UPDATE_EMAIL_CHECK_FREQUENCY, PRECESSED_STEPS };
