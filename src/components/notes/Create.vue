<template>
  <form class="create-note" v-on:submit.prevent="createNote()">
    <input name="title" v-model="title" placeholder="Title" />
    <textarea name="content" v-model="content" placeholder="Notes here.." rows="2"></textarea>
    <button type="submit">+</button>
  </form>
</template>

<script>
  import noteRepository from '../../data/NoteRepository';

  export default {
    data() {
      return {
        title: '',
        content: '',
      };
    },
    methods: {
      createNote() {
        if (this.title.trim() || this.content.trim()) {
          noteRepository.create({ title: this.title, content: this.content }, (err) => {
            if (err) {
              return this.$dispatch('alert', { type: 'error', message: 'Failed to create note' });
            }
            this.title = '';
            this.content = '';
            return this.$dispatch('alert',
              { type: 'success', message: 'Note successfully created' });
          });
        }
      },
    },
  };
</script>

<style>
  form.create-note {
    position: relative;
    width: 90%;
    margin: 15px auto;
    background: lightseagreen;
    border-radius: 2px;
    box-shadow: 0 3px 8px grey;
  }
  form.create-note input {
    width: 100%;
    border: none;
    padding: 12px;
    outline: none;
    font-size: 20px;
    background: teal;
    color: white;
  }
  form.create-note textarea {
    width: 100%;
    border: none;
    padding: 12px;
    outline: none;
    font-size: 20px;
    background: lightseagreen;
    color: white;
  }
  form.create-note button {
    position: absolute;
    right: 15px;
    bottom: -20px;
    background: #41b883;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    outline: none;
    font-size: 25px;
  }
  ::-webkit-input-placeholder  { /* Chrome */
    color: white;
    opacity: 0.8;
  }
  :-ms-input-placeholder { /* IE 10+ */
    color: white;
    opacity: 0.5;
  }
  ::-moz-placeholder { /* Firefox 19+ */
    color: white;
    opacity: 0.5;
  }
  :-moz-placeholder { /* Firefox 4 - 18 */
    color: white;
    opacity: 0.5;
  }
</style>
