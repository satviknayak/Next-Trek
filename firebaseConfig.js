import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAhLX0hQg-ebLx7XeeYE9cgCuSeWX6XPO8",
  authDomain: "next-trek.firebaseapp.com",
  projectId: "next-trek",
  storageBucket: "next-trek.appspot.com",
  messagingSenderId: "605628984580",
  appId: "1:605628984580:web:7ee65b8202b6663bcdf451"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth(app);