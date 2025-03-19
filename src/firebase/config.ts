import { initializeApp, getApps } from "firebase/app";

 const firebaseConfig = {
     apiKey: process.env.NEXT_PUBLIC_FIREBASE_apiKey,
     authDomain: process.env.NEXT_PUBLIC_FIREBASE_authDomain,
     projectId: process.env.NEXT_PUBLIC_FIREBASE_projectId,
     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_storageBucket,
     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_messagingSenderId,
     appId: process.env.NEXT_PUBLIC_FIREBASE_appId,
     measurementId: process.env.NEXT_PUBLIC_FIREBASE_measurementId,
 };

 // Initialize Firebase
 let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

 export default firebase_app;