import type { NextApiRequest, NextApiResponse } from 'next';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const PRICE_ID = process.env.PRE_ORDER_PRICE_ID;
const ROOT_URL =
  process.env.VERCEL_ENV === 'production'
    ? 'https://todocity.app'
    : process.env.VERCEL_ENV === 'preview'
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';

const SUCCESS_URL = `${ROOT_URL}/pricing/upgrade/success?session_id={CHECKOUT_SESSION_ID}`;
const CANCEL_URL = `${ROOT_URL}/pricing/upgrade/cancel`;

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
    success_url: SUCCESS_URL,
    cancel_url: CANCEL_URL,
  });

  res.redirect(303, session.url);
}
