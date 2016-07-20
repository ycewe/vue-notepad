<template>
  <div>
    <alerts :alerts="alerts"></alerts>
    <create-note-form></create-note-form>
    <notes></notes>
    <update-modal :note.sync="selectedNote"></update-modal>
  </div>
</template>

<script>
  import Notes from './components/notes/Index';
  import CreateNoteForm from './components/notes/Create';
  import UpdateModal from './components/notes/UpdateModal';
  import Alerts from './components/Alerts';

  export default {
    components: {
      Notes,
      CreateNoteForm,
      UpdateModal,
      Alerts,
    },
    data() {
      return {
        selectedNote: null,
        alerts: [],
      };
    },
    events: {
      alert: function displayAlert(alert) {
        this.alerts.push(alert);
        setTimeout(() => {
          this.alerts.$remove(alert);
        }, alert.duration || 1500);
      },
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
