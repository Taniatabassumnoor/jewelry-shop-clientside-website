import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default initializeAuthentication;

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID,
//   };
//   export default firebaseConfig;

// REACT_APP_API_KEY=AIzaSyBIb78_U3dXFFiAEPqY2KhxTzDfZY_fSz8
// REACT_APP_AUTH_DOMAIN=doctors-portal-37391.firebaseapp.com
// REACT_APP_PROJECT_ID=doctors-portal-37391
// REACT_APP_STORAGE_BUCKET=doctors-portal-37391.appspot.com
// REACT_APP_MESSAGING_SENDER_ID=405410878890
// REACT_APP_APP_ID=1:405410878890:web:bd78921b88b100d1e487d