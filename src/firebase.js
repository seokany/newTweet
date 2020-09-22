import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: process.REACT_APP_API_KEY,
  authDomain: process.REACT_APP_AUTO_DOMAIN,
  databaseURL: process.REACT_APP_DATABASE_URL,
  projectId: process.REACT_APP_PROJECT_ID,
  storageBucket: process.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.REACT_APP_SENDER_ID,
  appId: process.REACT_APP_APP_ID,
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
