import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyDEs8FmikALniBCjr2SMtFsGRnCOkI2Zxw",
    authDomain: "music-b92de.firebaseapp.com",
    projectId: "music-b92de",
    storageBucket: "music-b92de.appspot.com",
    messagingSenderId: "950147439345",
    appId: "1:950147439345:web:fe52879f2c727f35fd2750"
})


export const auth = getAuth()
export default app;