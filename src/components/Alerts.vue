<template>
  <div class="alerts">
    <div v-for="alert in alerts" v-bind:class="alert.type" transition="expand">
      <p>
        {{alert.message}}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['alerts'],
  };
</script>

<style>
  .alerts {
    position: fixed;
    top: 50px;
    right: 0;
    left: 0;
    z-index: 1;
  }
  .alerts div {
    background: #bbb;
    overflow: hidden;
  }
  .alerts div.error {
    background: #e03c3c;
    color: #fff;
  }
  .alerts div.success {
    background: #41b883;
    color: #fff;
  }
  .alerts p {
    width: 480px;
    margin: 0 auto;
    padding: 4px;
    text-align: center;
  }
  .expand-transition {
    max-height: 200px;
    transition: max-height 0.5s ease;
  }
  .expand-enter, .expand-leave {
    max-height: 0;
  }
</style>
