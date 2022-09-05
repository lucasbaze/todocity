import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { FieldValue } from 'firebase-admin/firestore';
admin.initializeApp();

import { transporter } from './provider';
import { newUserSignupTemplate } from './templates/new-user-signup';
import { newUserReferralTemplate } from './templates/new-user-referral';

export const sendNewUserSignupEmail = functions.firestore
  .document('users/{userId}')
  .onCreate((newUserSnapshot, context) => {
    const newUserData = newUserSnapshot.data();
    console.log('Data: ', newUserData);

    /*
     * Send New User Email
     */

    const referredBy = newUserData?.referredBy || null;
    const name = newUserData?.displayName || null;
    const email = newUserData?.email || null;

    const subject = `${
      process.env.GCP_PROJECT !== 'todocity-prod' && 'Staging: '
    } Welcome ${name}!`;

    const mailOptions = {
      from: 'Lucas from TodoCity <admin@todocity.app>',
      to: email,
      subject: subject,
      html: newUserSignupTemplate({ name, isReferral: !!referredBy }),
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

    /*
     * Send Referrer Email
     */

    if (referredBy) {
      admin
        .firestore()
        .collection('users')
        .where('referralCode', '==', referredBy)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((docSnap) => {
            if (docSnap.exists) {
              const userData = docSnap.data();

              /*
               * Update referrer referrals count
               */

              admin
                .firestore()
                .collection('users')
                .doc(docSnap.id)
                .update({
                  referrals: FieldValue.arrayUnion(newUserSnapshot.id),
                });

              /*
               * Send referrer an email
               */

              const name = userData.displayName;
              const email = userData.email;
              const subject = `${
                process.env.GCP_PROJECT !== 'todocity-prod' && 'Staging: '
              } Hey ${name}! Your referral just signed up for TodoCity!`;

              const mailOptions = {
                from: 'Lucas from TodoCity <admin@todocity.app>',
                to: email,
                subject: subject,
                html: newUserReferralTemplate(),
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
            }
          });
        });
    }
  });
