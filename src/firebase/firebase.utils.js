import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyDYd1BoBLujzb49rzONbjUfiKYMzTnz0Rg",
	authDomain: "clone-cd89a.firebaseapp.com",
	databaseURL: "https://clone-cd89a.firebaseio.com",
	projectId: "clone-cd89a",
	storageBucket: "clone-cd89a.appspot.com",
	messagingSenderId: "323120213408",
	appId: "1:323120213408:web:5ce943bce0020ea17888c5",
	measurementId: "G-W262016CN6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };