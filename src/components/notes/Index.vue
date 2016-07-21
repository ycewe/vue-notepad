<template>
  <div class="notes" v-el:notes>
    <note v-for="note in notes" :note="note" v-on:click="selectNote(note)"></note>
  </div>
</template>

<script>
  import Masonry from 'masonry-layout';
  import Note from './Note';
  import noteRepository from '../../data/NoteRepository';

  export default {
    components: {
      Note,
    },
    data() {
      return {
        notes: [],
      };
    },
    watch: {
      notes: {
        handler() {
          this.masonry.reloadItems();
          this.masonry.layout();
        },
        deep: true,
      },
    },
    methods: {
      selectNote({ key, title, content }) {
        this.$dispatch('note.selected', { key, title, content });
      },
    },
    ready() {
      this.masonry = new Masonry(this.$els.notes, {
        itemSelector: '.note',
        columnWidth: 240,
        gutter: 16,
        fitWidth: true,
      });
      noteRepository.on('added', (note) => {
        this.notes.unshift(note);
      });
      noteRepository.on('changed', ({ key, title, content }) => {
        const outdatedNote = noteRepository.find(this.notes, key);
        outdatedNote.title = title;
        outdatedNote.content = content;
      });
      noteRepository.on('removed', ({ key }) => {
        const noteToRemove = noteRepository.find(this.notes, key);
        this.notes.$remove(noteToRemove);
      });
      noteRepository.attachFirebaseListeners();
    },
  };
</script>

<style>
  .notes {
    margin: 0 auto;
  }
</style>
