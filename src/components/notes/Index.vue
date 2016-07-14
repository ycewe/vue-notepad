<template>
  <div class="notes">
    <note v-for="note in notes" :note="note"></note>
  </div>
</template>
<script>
  import firebase from 'firebase';
  import Note from './Note';

  export default {
    components: {
      Note,
    },
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

      firebase.database().ref('notes').on('child_added', (snapshot) => {
        const note = snapshot.val();
        this.notes.unshift(note);
      });
    },
  };
</script>
<style>
  .notes {
    padding: 0 100px;
  }
</style>
