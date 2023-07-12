import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB0h7y-afn2CUBCPp9F5NH-uU8L6NsfsXQ",
  authDomain: "mern-c98e8.firebaseapp.com",
  projectId: "mern-c98e8",
  storageBucket: "mern-c98e8.appspot.com",
  messagingSenderId: "510818473173",
  appId: "1:510818473173:web:bef2791e986d17a6ac3e5c",
  measurementId: "G-2W10PNFDNZ",
};

const app = initializeApp(firebaseConfig);

export const FireBasestorage = getStorage(app);
