<template>
  <ol>
    <li v-for="note in notes">
      <pre>
        {{note | json}}
      </pre>
    </li>
  </ol>
</template>
<script>
import firebase from 'firebase';

export default {
  data() {
    return {
      notes: [],
    };
  },
  ready() {
    const config = {
      apiKey: 'AIzaSyB31zKN-7XIwpTwFzgkEY-kFrXqP72n1Ao',
      authDomain: 'alexander-b2c0d.firebaseapp.com',
      databaseURL: 'https://alexander-b2c0d.firebaseio.com',
      storageBucket: 'alexander-b2c0d.appspot.com',
    };
    firebase.initializeApp(config);

    /** example
    firebase.database().ref('notes').set([
      { title: 'Hello world!', content: 'Lorem Ipsum' },
    ]); **/

    firebase.database().ref('notes').on('child_added', (snapshot) => {
      const note = snapshot.val();
      this.notes.unshift(note);
    });
  },
};
</script>
<style>

</style>
