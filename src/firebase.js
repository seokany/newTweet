import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBy4ObhzURRoNY400B0Qzs8iHG9VJbmcSI",
  authDomain: "newtweet-5a46f.firebaseapp.com",
  databaseURL: "https://newtweet-5a46f.firebaseio.com",
  projectId: "newtweet-5a46f",
  storageBucket: "newtweet-5a46f.appspot.com",
  messagingSenderId: "832729779888",
  appId: "1:832729779888:web:b152bafd483012e329b575",
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
