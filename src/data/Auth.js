import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyB31zKN-7XIwpTwFzgkEY-kFrXqP72n1Ao',
  authDomain: 'alexander-b2c0d.firebaseapp.com',
  databaseURL: 'https://alexander-b2c0d.firebaseio.com',
  storageBucket: 'alexander-b2c0d.appspot.com',
};
firebase.initializeApp(config);

export default {
  ref: firebase.auth(),
  onAuth(authCallback) {
    this.ref.onAuthStateChanged(authCallback);
  },
  getAuth() {
    return this.ref.currentUser;
  },
  signInWithPassword(email, password) {
    return this.ref.signInWithEmailAndPassword(email, password);
  },
  signUpWithPassword(email, password) {
    return this.ref.createUserWithEmailAndPassword(email, password);
  },
  signOut() {
    this.ref.signOut();
  },
};
