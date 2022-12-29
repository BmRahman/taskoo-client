// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUUT9CL9zj8wCbp0_uf1Kzia0RlhqrRZY",
  authDomain: "taskoo-5ced0.firebaseapp.com",
  projectId: "taskoo-5ced0",
  storageBucket: "taskoo-5ced0.appspot.com",
  messagingSenderId: "958632389046",
  appId: "1:958632389046:web:dd84c8305bd94432f73917"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;