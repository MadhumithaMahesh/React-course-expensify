// import * as firebase from 'firebase'
// const config = {
//     apiKey: process.env.FIREBASE_API_KEY,
//     authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.FIREBASE_DATABASE_URL,
//     projectId: process.env.FIREBASE_PROJECT_ID,
//     storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//     
//   };
//   // Initialize Firebase
//   firebase.initializeApp(config);

//   const database = firebase.database()
//   export {firebase,database as default}


  import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCC0hYebhXI22xmnmOwfCPwKXeWL7H8WTE",
  authDomain: "expensify-da579.firebaseapp.com",
  databaseURL: "https://expensify-da579.firebaseio.com",
  projectId: "expensify-da579",
  storageBucket: "expensify-da579.appspot.com",
  messagingSenderId: "789219048822",
  appId: "1:789219048822:web:fe88738c4cdef382a80e57",
  measurementId: "G-XR513R7FLM"

//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.FIREBASE_DATABASE_URL,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
// measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };