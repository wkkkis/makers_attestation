import * as firebase from 'firebase/app'
import {
    getFirestore,
    collection
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyBK8j8dXj0qSVkviXZ0wcVaZJCtblquE-Q',
    authDomain: 'makers-attestation.firebaseapp.com',
    projectId: 'makers-attestation',
    storageBucket: 'makers-attestation.appspot.com',
    messagingSenderId: '554881359967',
    appId: '1:554881359967:web:148c37f4e875b2dd913bea',
    measurementId: 'G-PTF6B21PL1'
};

//init app
firebase.initializeApp(firebaseConfig)

//init services
export const db = getFirestore()

//collection ref
export const colRef = collection(db, 'books')