import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDuOi_wi20sicWot63RV8ky423jsg5Bar4",
  authDomain: "udemy-vue-firebase-bd0ef.firebaseapp.com",
  projectId: "udemy-vue-firebase-bd0ef",
  storageBucket: "udemy-vue-firebase-bd0ef.appspot.com",
  messagingSenderId: "502315536288",
  appId: "1:502315536288:web:c5fd277aca60c07fbc9ec5"
};
// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }
