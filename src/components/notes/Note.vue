<template>
  <div class="note">
    <h1>{{note.title}}</h1>
    <pre>{{note.content}}</pre>
  </div>
</template>

<script>
  export default {
    props: ['note'],
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
</style>
