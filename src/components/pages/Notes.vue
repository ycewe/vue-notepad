<template>
  <div>
    <create-note-form></create-note-form>
    <notes></notes>
    <update-modal :note.sync="selectedNote"></update-modal>
  </div>
</template>

<script>
  import Notes from '../notes/Index';
  import CreateNoteForm from '../notes/Create';
  import UpdateModal from '../notes/UpdateModal';

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
