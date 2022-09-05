import * as functions from 'firebase-functions';

import { transporter } from './provider';
import { userFeedbackTemplate } from './templates/user-feedback';

export const sendUserFeedbackEmail = functions.https.onCall((data, context) => {
  console.log('Data: ', data);
  // Check data attributes;
  if (
    !(typeof data.subject === 'string' || data.subject?.length === 0) ||
    !(typeof data.body === 'string' || data.body?.length === 0)
  ) {
    console.log('No body or subject');
    throw new functions.https.HttpsError(
      'invalid-argument',
      'Oh oh... looks like you are missing a subject or body.'
    );
  }

  // Checking that the user is authenticated.
  if (!context.auth) {
    console.log('No user included');
    // Throwing an HttpsError so that the client gets the error details.
    throw new functions.https.HttpsError(
      'failed-precondition',
      'Stop right there hacker. You must be authenticated to send feedback.'
    );
  }

  const submittedSubject = data.subject || 'No Subject';
  const submittedBody = data.body || 'No Body';
  const uid = context.auth.uid;
  const email = context.auth.token.email;

  const subject = `${
    process.env.GCP_PROJECT !== 'todocity-prod' && 'Staging'
  } User Feedback - ${submittedSubject}`;

  const mailOptions = {
    from: 'admin@todocity.app',
    to: 'support@todocity.app',
    subject: subject,
    html: userFeedbackTemplate({ uid, email, submittedBody }),
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      // TODO: configure sentry error to send here
      console.error('Error: ', err);
      console.error('Data: ', data);
      throw new functions.https.HttpsError(
        'unknown',
        'Failed to send email',
        err
      );
    } else {
      return { data };
    }
  });
});
