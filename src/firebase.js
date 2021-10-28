import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDiKYi4SL6WHadYv42YD8WwEsuzJPiFE3w',
  authDomain: 'apollo-linkedin-clone.firebaseapp.com',
  projectId: 'apollo-linkedin-clone',
  storageBucket: 'apollo-linkedin-clone.appspot.com',
  messagingSenderId: '223048766455',
  appId: '1:223048766455:web:f2b6376dbfdd033af994f2',
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();
