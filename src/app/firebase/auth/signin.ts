import firebase_app, { auth } from "../config";
import { signInWithEmailAndPassword, getAuth, setPersistence, browserSessionPersistence } from "firebase/auth";


export default async function signIn(email:string, password:string) {
    let result = null,
        error = null;
    try {
        result = await signInWithEmailAndPassword(auth, email, password);
        await setPersistence(auth, browserSessionPersistence); // Set persistence to local

    } catch (e) {
        error = e;
    }

    return { result, error };
}