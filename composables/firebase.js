import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBz4CsY66_INIq1-eIM_lvWVEZFszdguCc',
	authDomain: 'nuxtstore-6cb56.firebaseapp.com',
	projectId: 'nuxtstore-6cb56',
	storageBucket: 'nuxtstore-6cb56.appspot.com',
	messagingSenderId: '52672960156',
	appId: '1:52672960156:web:3a900618a82f36ae61ff59',
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
