<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    methods: {
        ...mapActions('DataStore', ['handleAuthStateChanged'])
    },
    mounted() {
      this.handleAuthStateChanged();
    }
}
</script>
