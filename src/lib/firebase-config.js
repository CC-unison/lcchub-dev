import { initializeApp, getApps } from "firebase/app";
import { getFirestore} from "firebase/firestore";

// Instead, set FirestoreSettings.localCache to an instance of PersistentLocalCache to turn on IndexedDb cache. Calling this function when FirestoreSettings.localCache is already specified will throw an exception.
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  kind: "memory",
};

const app = getApps().length
  ? getApps()[0]
  : initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
