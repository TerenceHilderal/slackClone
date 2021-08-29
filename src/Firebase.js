import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyCe_bSGWY4EPR33NaBlf_Q7Ja8jF28tEvg',
	authDomain: 'slack-clone-a6ced.firebaseapp.com',
	projectId: 'slack-clone-a6ced',
	storageBucket: 'slack-clone-a6ced.appspot.com',
	messagingSenderId: '1075943419396',
	appId: '1:1075943419396:web:73df663ae985e52fad4f51',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
