import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCkqFnH_dce4efibRY0fTWKtQOELBPCuIU",
  authDomain: "movieapp-4d4ad.firebaseapp.com",
  projectId: "movieapp-4d4ad",
  storageBucket: "movieapp-4d4ad.firebasestorage.app",
  messagingSenderId: "101630102647",
  appId: "1:101630102647:web:c2d8ac00ca829069b10a72",
  measurementId: "G-GKEWD518DR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);
export { auth };
