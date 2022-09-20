import firebase from "firebase";
import 'firebase/firestore';

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyAYGWauf4kdFzKH7fvl1946e1emzIVQ4c8",
        authDomain: "next-crud-3cb50.firebaseapp.com",
        projectId: "next-crud-3cb50",
    });
}

export default firebase