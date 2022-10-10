import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyABhSBkLkGGaSpuHBxYd58YA3wfTn8GxjY',
	authDomain: 'cooking-map-site.firebaseapp.com',
	projectId: 'cooking-map-site',
	storageBucket: 'cooking-map-site.appspot.com',
	messagingSenderId: '952744719834',
	appId: '1:952744719834:web:0fc6916396f931bbe5bce3',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init sercises
const projectFirestore = firebase.firestore();

export { projectFirestore };
