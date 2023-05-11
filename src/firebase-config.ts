// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'fridge-app-31398.firebaseapp.com',
  projectId: 'fridge-app-31398',
  storageBucket: 'fridge-app-31398.appspot.com',
  messagingSenderId: '1007944779530',
  appId: process.env.REACT_APP_APP_ID,
  measurementId: 'G-19T7280GFT',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
