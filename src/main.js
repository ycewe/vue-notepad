import Vue from 'vue';
import App from './App';
import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyB31zKN-7XIwpTwFzgkEY-kFrXqP72n1Ao',
  authDomain: 'alexander-b2c0d.firebaseapp.com',
  databaseURL: 'https://alexander-b2c0d.firebaseio.com',
  storageBucket: 'alexander-b2c0d.appspot.com',
};
firebase.initializeApp(config);

firebase.database().ref('notes').set([
  {
    title: 'Hello world',
    content: 'bye bye world',
  },
]);

firebase.database().ref('notes').on('value', (snapshot) => {
  const notes = snapshot.val();
  window.alert(notes[0].title);
});

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App },
});
