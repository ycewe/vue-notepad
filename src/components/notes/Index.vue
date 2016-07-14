<template>
  <div class="notes" v-el:notes>
    <note v-for="note in notes" :note="note"></note>
  </div>
</template>
<script>
  import firebase from 'firebase';
  import Masonry from 'masonry-layout';
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
      const masonry = new Masonry(this.$els.notes, {
        itemSelector: '.note',
        columnWidth: 240,
        gutter: 16,
        fitWidth: true,
      });
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
        this.$nextTick(() => {
          masonry.reloadItems();
          masonry.layout();
        });
      });
    },
  };
</script>

<style>
  .notes {
    margin: 0 auto;
  }
</style>
