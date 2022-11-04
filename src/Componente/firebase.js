// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDMXVz_SsvXe1_zILc7p5MIMrFzvHQUMsQ',
    authDomain: 'fb-bdreact-41b37.firebaseapp.com',
    projectId: 'fb-bdreact-41b37',
    storageBucket: "fb-bdreact-41b37.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;
