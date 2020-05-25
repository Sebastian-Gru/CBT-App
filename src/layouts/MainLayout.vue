<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          v-if="$route.meta.back"
          v-go-back.single
          flat
          dense
          label="Back" />
        <q-toolbar-title class="absolute-center">
          CBT APP
        </q-toolbar-title>
        <div
          v-if="$route.meta.login">
        <q-btn
          v-if="!userDetails.userId"
          class="absolute-right q-pr-sm"
          icon="account_circle"
          to="/auth"
          no-caps
          flat
          dense
          label="Login" />
        <q-btn
          v-else
          @click="logoutUser"
          class="absolute-right q-pr-sm"
          icon="account_circle"
          no-caps
          to="/login"
          flat
          dense>
          Logout<br>
          {{userDetails.name}}
        </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'MainLayout',

  data () {
    return {

    }
  },
 computed: {
      ...mapState('DataStore', ['userDetails'])
 },
    methods: {
      ...mapActions('DataStore', ['logoutUser'] )
    }

}
</script>
<style lang="stylus">
  .q-toolbar
    .q-btn
      line-height: 1.2
</style>
