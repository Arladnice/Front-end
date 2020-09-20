import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyB0zqH2V_FhZooWQavxooYtDP7otMIVAjU',
	authDomain: 'facebook-messanger-clone-e2ec2.firebaseapp.com',
	databaseURL: 'https://facebook-messanger-clone-e2ec2.firebaseio.com',
	projectId: 'facebook-messanger-clone-e2ec2',
	storageBucket: 'facebook-messanger-clone-e2ec2.appspot.com',
	messagingSenderId: '523118762780',
	appId: '1:523118762780:web:63fab1f141b6b1c4f3b8d9',
	measurementId: 'G-809J7Z34SX',
});

const db = firebaseApp.firestore();

export default db;
