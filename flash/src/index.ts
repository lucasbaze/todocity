import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

import { transporter } from './email/provider';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info('Hello logs!', { structuredData: true });
  response.send('Hello from Firebase!');
});

// https://github.com/firebase/quickstart-js/blob/fcd87b554cd4fd724f19a3aa50ce9c15955a3df2/functions/functions/index.js#L87-L96
export const addMessage = functions.https.onCall((data, context) => {
  const text = data.text;
  // Check data attributes;
  if (!(typeof text === 'string' || text.length === 0)) {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'The function must be called with one arguments text contained the message text to add'
    );
  }
  console.log('Text: ', text);
  return admin
    .firestore()
    .collection('messages')
    .add({
      message: text,
    })
    .then(() => {
      console.log('New Message Written');
      return { text: text };
    })
    .catch((err) => {
      throw new functions.https.HttpsError('unknown', err.message, err);
    });
});

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
  const name = context.auth.token.name || null;
  const email = context.auth.token.email || null;

  const subject = `${
    process.env.GCP_PROJECT !== 'todocity-prod' && 'Staging'
  } User Feedback - ${submittedSubject}`;

  const body = `
    <b>User Data</b> 
    <br />
    User Id: ${uid}
    <br />
    Name: ${name}
    <br />
    Email: ${email}
    <br />
    ${submittedBody}
  `;

  const mailOptions = {
    from: 'admin@todocity.app',
    to: 'support@todocity.app',
    subject: subject,
    html: body,
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
