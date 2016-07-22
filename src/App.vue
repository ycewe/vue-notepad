<template>
  <div>
    <header-bar></header-bar>
    <alerts :alerts="alerts"></alerts>
    <router-view></router-view>
  </div>
</template>

<script>
  import Alerts from './components/Alerts';
  import HeaderBar from './components/HeaderBar';

  export default {
    components: {
      Alerts,
      HeaderBar,
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
      search: function search(searchText) {
        this.$broadcast('search', searchText);
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
  }
  .clearfix:after {
    content: "";
    display: table;
    clear: both;
  }
</style>
