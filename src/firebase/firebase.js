import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDPerefo-5ry62ddkAs8bgpqpf67mv_O44",
  authDomain: "tapjumpers.firebaseapp.com",
  projectId: "tapjumpers",
  storageBucket: "tapjumpers.appspot.com",
  messagingSenderId: "786784959821",
  appId: "1:786784959821:web:82533d87622b55c3d38b04"
};

export const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth();
export const firebaseDB = getFirestore(app);
export const firebaseStorage = getStorage(app);
