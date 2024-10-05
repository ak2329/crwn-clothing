// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCOfMk0h-ogYYRiZWwVVClNfWpnP33apLU",
	authDomain: "crwn-clothing-db-f83fc.firebaseapp.com",
	projectId: "crwn-clothing-db-f83fc",
	storageBucket: "crwn-clothing-db-f83fc.appspot.com",
	messagingSenderId: "249850463351",
	appId: "1:249850463351:web:5c1ce95749da61f883f272",
	measurementId: "G-GGK913SLXL"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth, additionalData = {}) => {
	if (!userAuth) return;

	const userDocRef = doc(db, "users", userAuth.uid)

	const userSnapshot = await getDoc(userDocRef)
	console.log(userSnapshot)
	// console.log(userSnapshot.exists())

	if (!userSnapshot.exists()) {
		const { email, displayName } = userAuth
		const createdAt = new Date()

		try {
			setDoc(userDocRef, {
				displayName, email, createdAt, ...additionalData
			})
		} catch (error) {
			console.log('error user logging', error.message)
		}
	}

	return userDocRef
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return

	return await signInWithEmailAndPassword(auth, email, password)
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return

	return await createUserWithEmailAndPassword(auth, email, password)
}