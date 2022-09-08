import { createTransport } from 'nodemailer';

const clientId = process.env.EMAIL_SERVICE_ACCOUNT_CLIENT_ID;
const privateKey = JSON.parse(
  process.env.EMAIL_SERVICE_ACCOUNT_PRIVATE_KEY || '{}'
);

export const transporter =
  process.env.APP_ENV !== 'production'
    ? createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
          user: 'santiago56@ethereal.email',
          pass: 'PPNXStGSNAJWMyrYDA',
        },
      })
    : createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          type: 'OAuth2',
          user: 'admin@todocity.app',
          serviceClient: clientId,
          privateKey: privateKey,
        },
      });
