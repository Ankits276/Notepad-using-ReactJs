import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUMg94IaGggZGJ6UX16BmIyc2AaxNHGsw",
  authDomain: "sticky-note-app-8d6b4.firebaseapp.com",
  projectId: "sticky-note-app-8d6b4",
  storageBucket: "sticky-note-app-8d6b4.appspot.com",
  messagingSenderId: "1080243488241",
  appId: "1:1080243488241:web:9b7ae6d58bbe969c6ab050",
};

const app = initializeApp(firebaseConfig);

export const Authentication = getAuth(app);
