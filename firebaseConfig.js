import { initializeApp } from "firebase/app";
import { FirebaseApp } from "firebase/app";
import { getFirestore,collection,doc,addDoc,getDoc,getDocs,updateDoc,deleteDoc,query,where,onSnapshot } from "firebase/firestore";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,setPersistence,browserLocalPersistence } from "firebase/auth"

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

export async function signUpUser(data){
    const userColRef = collection(database, 'UserProfile')
    const { email, password,name } = data
    const userCred = await createUserWithEmailAndPassword(auth, email, password)
    delete data.password
    data.uid = userCred.user.uid
    data.email = userCred.user.email
    data.name = name
    data.is_admin = false
    data.photo = userCred.user.photoURL
    await addDoc(userColRef, data)
    return userCred.user
}

export async function signInUser(data){
    setPersistence(auth,browserLocalPersistence)
    const {email,password} = data
    const userCred = await signInWithEmailAndPassword(auth, email, password)
    return userCred.user
}

export async function getUserProfile(uid){
    const userColRef = collection(database, 'UserProfile')
    const users = []
    const q = query(userColRef, where('uid', '==', uid))
    const userRef = await getDocs(q)
    userRef.forEach((user) => {
      users.push({ ...user.data(), id: user.id })
    })
    return users[0]
}