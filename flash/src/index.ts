import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

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
