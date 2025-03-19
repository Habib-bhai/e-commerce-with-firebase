import { initializeApp, getApps } from "firebase/app";


 const firebaseConfig = {
     apiKey: process.env.NEXT_PUBLIC_FIREBASE_apiKey,
     authDomain: process.env.NEXT_PUBLIC_FIREBASE_authDomain,
     projectId: process.env.NEXT_PUBLIC_FIREBASE_projectId,
     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_storageBucket,
     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_messagingSenderId,
     appId: process.env.NEXT_PUBLIC_FIREBASE_appId,
     measurementId: process.env.NEXT_PUBLIC_FIREBASE_measurementId
 };

 // Initialize Firebase
 const firebase_app = !getApps().length  ? initializeApp(firebaseConfig) : getApps()[0];

 export default firebase_app;