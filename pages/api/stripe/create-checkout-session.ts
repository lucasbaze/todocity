import type { NextApiRequest, NextApiResponse } from 'next';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const PRICE_ID = process.env.PRE_ORDER_PRICE_ID;

const YOUR_DOMAIN = 'http://localhost:3000';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: PRICE_ID,
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/pricing/upgrade/success`,
    cancel_url: `${YOUR_DOMAIN}/pricing/upgrade/cancel`,
  });

  res.redirect(303, session.url);
}
