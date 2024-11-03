import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCceiy1AN25IM8tAj7kFyQaYCKeursZhwc",
  authDomain: "vue-blog-3521a.firebaseapp.com",
  projectId: "vue-blog-3521a",
  storageBucket: "vue-blog-3521a.appspot.com",
  messagingSenderId: "480597646326",
  appId: "1:480597646326:web:31d44f1b4036c25dc9c5d7",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
