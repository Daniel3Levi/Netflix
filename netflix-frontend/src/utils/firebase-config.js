import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyDao2FtOJ92bk2Ka9P5qWOvdR76Nv3W7Vo',
  authDomain: 'netflix-ce1c1.firebaseapp.com',
  projectId: 'netflix-ce1c1',
  storageBucket: 'netflix-ce1c1.appspot.com',
  messagingSenderId: '287878216225',
  appId: '1:287878216225:web:fc3104ad0ee4bcc2e54160',
  measurementId: 'G-1VYKWZ2RNT',
};

const app = initializeApp(firebaseConfig);
export const firbaseAuth = getAuth(app);
