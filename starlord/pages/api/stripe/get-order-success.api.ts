import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export type TOrderSuccess = {
  session: Stripe.Checkout.Session;
  customer: Stripe.Customer;
};

// https://stripe.com/docs/payments/checkout/custom-success-page
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TOrderSuccess>
) {
  const session: Stripe.Checkout.Session =
    await stripe.checkout.sessions.retrieve(req.query.session_id);
  const customer: Stripe.Customer = await stripe.customers.retrieve(
    session.customer
  );

  res.status(200).json({
    session,
    customer,
  });
}
