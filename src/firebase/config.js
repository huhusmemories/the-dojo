import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBZcQHcgf_9nBZXpXyGpxckogo2Z14Y7Aw",
  authDomain: "thedojo-99926.firebaseapp.com",
  projectId: "thedojo-99926",
  storageBucket: "thedojo-99926.appspot.com",
  messagingSenderId: "341069979136",
  appId: "1:341069979136:web:b1810f96960d77b70ac2e5"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }
