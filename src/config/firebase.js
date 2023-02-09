import { initializeApp } from 'firebase/app'
import { getFirestore } from "@firebase/firestore"

const config = {
  apiKey: 'AIzaSyCD4VEo6Rl-sT-xMRknZnYrAniariemMhc',
  authDomain: 'fb-storedharrynet.firebaseapp.com',
  projectId: 'fb-storedharrynet',
  storageBucket: 'fb-storedharrynet.appspot.com',
  messagingSenderId: '676695393333',
  appId: '1:676695393333:web:4c52552ab69fc3ce451d7c'
}


const app = initializeApp(config);
export const fire = getFirestore(app)
