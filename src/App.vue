<template>
  <div>
    <create-note-form></create-note-form>
    <notes></notes>
    <update-modal :note.sync="selectedNote"></update-modal>
  </div>
</template>

<script>
  import Notes from './components/notes/Index.vue';
  import CreateNoteForm from './components/notes/Create.vue';
  import UpdateModal from './components/notes/UpdateModal.vue';

  export default {
    components: {
      Notes,
      CreateNoteForm,
      UpdateModal,
    },
    data() {
      return {
        selectedNote: null,
      };
    },
    events: {
      'note.selected': function openUpdateModal(note) {
        this.selectedNote = note;
      },
    },
  };
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html {
    font-family: sans-serif;
  }
  body {
    background: mintcream;
    padding: 0 16px;
  }
</style>
