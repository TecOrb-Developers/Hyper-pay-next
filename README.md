## Hyperpay integration Introdution
 * To start hyper pay payment gateway there is no third party integration.
 * Here we need card entity id like visa entity id or mada card entity id
 * Hyper provide Card widget to enter card details if add new card
 * Hyper provide Card widget to enter card cvv if we do payment with save card
 * Hyper pay provide api to verify payment

## Testing test card and api and payment widget card



- [hyperPay](https://eu-prod.oppwa.com/v1/paymentWidgets.js) – Payment Widget -[hyperPay](https://eu-prod.oppwa.com) – Verify payment of testing card

## Testing live card api and payment widget card

- [hyperPay](https://test.oppwa.com/v1/paymentWidgets.js) – Payment Widget -[hyperPay](https://test.oppwa.com) – Verify payment of testing card

## Payment with new card

![new-card](https://github.com/Sumittecorb/hyper-pay-next/assets/105202084/e2507643-4fbc-496c-8be7-4b70846c38d6)

* We do payment with new card and also with saved card list
* If we do payment with add new card then pls check code of root file app.tsx
all instruction are there.

## saved card payment
![saved-card](https://github.com/Sumittecorb/hyper-pay-next/assets/105202084/ec77ec60-de6a-4934-aac7-b140036254a4)

* When we do payment with save card then the process is same
* Firstly genrate checkout id from select card
* Then behalf of that render the card widget where we enter only cvv no.
* And then process is same as
![verify](https://github.com/Sumittecorb/hyper-pay-next/assets/105202084/fc085deb-a90e-42e0-b20e-e894972e2715)

### Frameworks

- [Next.js](https://nextjs.org/) – React framework for building performant apps with the best developer experience
- [Node.js](https://authjs.dev/) – Handle user authentication with ease with providers like Google, Twitter, GitHub, etc.

### Code Quality

- [TypeScript](https://www.typescriptlang.org/) – Static type checker for end-to-end typesafety
- [Prettier](https://prettier.io/) – Opinionated code formatter for consistent code style
- [ESLint](https://eslint.org/) – Pluggable linter for Next.js and TypeScript

## testing Entity Id
- NEXT_GOEJAR_HYPERPAY_VISA_MASTER_ENTITYID=8ac7a4c87f485438017f4ad726376ecc
- NEXT_GOEJAR_HYPERPAY_VISA_MADA_ENTITYID=8ac7a4c87f485438017f4ad7ddda6ed5
- NEXT_GOEJAR_HYPERPAY_PAYMENT_WIDGET=https://test.oppwa.com/v1/paymentWidgets.js
- NEXT_HYPERPAY_PAYMENT_URL=https://test.oppwa.com







