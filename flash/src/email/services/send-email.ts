import {
  createTransport,
  createTestAccount,
  SendMailOptions,
  SentMessageInfo,
} from 'nodemailer';

const clientId = process.env.EMAIL_SERVICE_ACCOUNT_CLIENT_ID;
const privateKey = JSON.parse(
  process.env.EMAIL_SERVICE_ACCOUNT_PRIVATE_KEY || '{}'
);

/**
 * This funciton was recreated to properly allow for test email scoping
 * @param { mailOptions } mailOptions Nodemailer sendMail options
 * @param { callback } callback the callback that includes error and info
 * @return { void }
 */
export function sendEmail(
  mailOptions: SendMailOptions,
  callback: (err: Error | null, info: SentMessageInfo) => void
): void {
  if (process.env.APP_ENV === 'production') {
    // Create transporter
    const transporter = createTransport({
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

    // Send email
    transporter.sendMail(mailOptions, callback);
  } else {
    // Create test account for ethereal mail
    createTestAccount((err, account) => {
      if (err) {
        console.error('Failed to create a testing account. ' + err.message);
        process.exit(1);
      }
      console.log(
        'Email account credentials for https://ethereal.email/: ',
        account
      );

      // Create test transporter
      const transporter = createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass,
        },
      });

      // Send email
      transporter.sendMail(mailOptions, callback);
    });
  }
}
