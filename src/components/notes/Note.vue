<template>
  <div class="note">
    <h1>{{note.title}}</h1>
    <pre>{{note.content}}</pre>
    <button type="button" v-on:click.stop="remove">x</button>
    <button class="edit" type="button">E</button>
  </div>
</template>

<script>
  import noteRepository from '../../data/NoteRepository';

  export default {
    props: ['note'],
    methods: {
      remove() {
        noteRepository.remove(this.note, (err) => {
          if (err) {
            return this.$dispatch('alert', { type: 'error', message: 'Failed to delete note' });
          }
          return this.dispatch('alert', { type: 'success', message: 'Note successfully deleted' });
        });
      },
    },
  };
</script>

<style>
  .note {
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px grey;
    padding: 10px;
    width: 240px;
    margin: 8px 0;
  }
  .note h1 {
    font-size: 18px;
    margin-bottom: 6px;
    color: darkcyan;
  }
  .note pre {
    color: green;
    font-size: 18px;
    margin-bottom: 10px;
    white-space: pre-wrap;
    word-wrap: break-word;;
    font-family: inherit;
  }
  .note button {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    margin: 0 4px 0 0;
  }
  .note button.edit {
    float: right;
  }
  .note:hover, .note:focus {
    box-shadow: 0 2px 10px #999;
  }
  .note:hover button, .note:focus button {
    opacity: 0.6s;
  }
  .note button:hover, .note button:focus {
    opacity: 1;
  }
</style>
