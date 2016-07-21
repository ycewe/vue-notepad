<template>
  <div>
    <alerts :alerts="alerts"></alerts>
    <router-view></router-view>
  </div>
</template>

<script>
  import Alerts from './components/Alerts';

  export default {
    components: {
      Alerts,
    },
    data() {
      return {
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
  .clearfix:after {
    content: "";
    display: table;
    clear: both;
  }
</style>
