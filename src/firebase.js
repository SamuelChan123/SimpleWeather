import firebase from 'firebase/app';

const firebaseConfig = {

  apiKey: "AIzaSyBj4EG_Vms2BT5aztfh6hQEqhTBFTVUBGU",
  authDomain: "spontaq-app.firebaseapp.com",
  databaseURL: "https://spontaq-app.firebaseio.com",
  projectId: "spontaq-app",
  storageBucket: "",
  messagingSenderId: "914350361028",
  appId: "1:914350361028:web:3f2324f4a5d382d2"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
