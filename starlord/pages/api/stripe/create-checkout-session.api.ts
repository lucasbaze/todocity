import type { NextApiRequest, NextApiResponse } from 'next';

import { getAppUrl } from '../../../libs/utils/global/get-app-url';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const PRICE_ID = process.env.PRE_ORDER_PRICE_ID;
const ROOT_URL = getAppUrl();

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
