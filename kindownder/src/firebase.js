import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";


const app = firebase.initializeApp({
    apiKey: "AIzaSyDEs8FmikALniBCjr2SMtFsGRnCOkI2Zxw",
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESEEAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
})



export const auth = getAuth()
export default app;




