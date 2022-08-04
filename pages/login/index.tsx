import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  EmailAuthCredential,
  EmailAuthProvider,
  UserCredential,
  User,
} from 'firebase/auth';
import firebaseui from 'firebaseui';
import {
  addDoc,
  collection,
  query,
  where,
  getDoc,
  doc,
  setDoc,
} from 'firebase/firestore';
import {
  useCollection,
  useCollectionOnce,
  useDocumentDataOnce,
} from 'react-firebase-hooks/firestore';
import { auth, db } from '@todocity/firebase';
import router from 'next/router';
import { Button } from '@chakra-ui/react';

function addNewUserToFireStore(user: User) {
  const details = {
    displayName: user.displayName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    photoUrl: user.photoURL,
    unlockedLots: 3,
    cityPoints: 15,
  };
  setDoc(doc(db, 'users', user.uid), details)
    .then((doc) => {
      console.log('New user Created: ', doc);
      router.push('/home');
    })
    .catch((e) => {
      console.error('Error creating new user: ', e);
    });
}

// Configure FirebaseUI.
const uiConfig: firebaseui.auth.Config = {
  signInSuccessUrl: '/home',
  signInOptions: [GoogleAuthProvider.PROVIDER_ID],
  callbacks: {
    signInSuccessWithAuthResult: (authResult: UserCredential) => {
      console.log('AuthResult: ', authResult.user);

      const userDocRef = doc(db, 'users', authResult.user.uid);
      getDoc(userDocRef)
        .then((doc) => {
          if (doc.exists()) {
            // Navigate to the app
            console.log('user already exists: ', doc);
            router.push('/home');
          } else {
            addNewUserToFireStore(authResult.user);
          }
        })
        .catch((error) => {
          console.error('Checking if customer exists failed" ' + error);
        });

      return false;
    },
  },
};

const createUserDoc = async () => {
  try {
    const docRef = await addDoc(collection(db, 'users'), {
      first: 'Alan',
      last: 'Turing',
      cityPoint: 24,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

// const queryRef = collection(db, 'users').;

function LoginPage() {
  const [snapshot, loading, error] = useCollection(collection(db, 'users'));
  console.log(
    'snapshot: ',
    snapshot?.docs.map((doc) => doc.data())
  );
  console.log('loading: ', loading);
  console.log('error: ', error);

  return (
    <div>
      <h1>Pineapple Login</h1>
      <p>Please sign-in:</p>
      <Button onClick={createUserDoc}>Create User in FireStore</Button>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </div>
  );
}

export default LoginPage;
