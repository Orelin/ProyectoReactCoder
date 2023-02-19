//Modulos
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// App's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAnstsWC5Zd6PDapf4Ls3inCAJoJ_JSg7M",
    authDomain: "react-ch-34880.firebaseapp.com",
    projectId: "react-ch-34880",
    storageBucket: "react-ch-34880.appspot.com",
    messagingSenderId: "341225509459",
    appId: "1:341225509459:web:f1a21362de3d49adcd6ca6"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
