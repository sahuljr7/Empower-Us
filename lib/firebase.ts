import {FirebaseOptions} from 'firebase/app'
import { initializeApp, getApp, getApps} from 'firebase/app';
import { getAuth } from 'firebase/auth'

const firebaseConfig: FirebaseOptions = {
    apiKey: "AIzaSyCRDE94OSF3J7PFZ29upOuI8kmTR4QoiU0",
    authDomain: "empower-hacks.firebaseapp.com",
    projectId: "empower-hacks",
    storageBucket: "empower-hacks.appspot.com",
    messagingSenderId: "521689442456",
    appId: "1:521689442456:web:4e0f221a47340dd1d1c8ed"
};

let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()
let auth = getAuth(app)

export { app, auth }