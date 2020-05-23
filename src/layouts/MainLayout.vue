<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          v-go-back.single
          flat
          dense
          label="Back" />
        <q-toolbar-title class="absolute-center">
          CBT APP
        </q-toolbar-title>
<!--        <q-btn-->
<!--          v-if="!userDetails.userId"-->
<!--          to="/auth"-->
<!--          class="absolute-right q-pr-sm"-->
<!--          icon="account_circle"-->
<!--          no-caps-->
<!--          flat-->
<!--          dense-->
<!--          label="Login" />-->
        <q-btn
          @click="logoutUser"
          class="absolute-right q-pr-sm"
          icon="account_circle"
          no-caps
          to="login"
          flat
          dense>
          Logout<br>
          Sebastian
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',

  data () {
    return {

    }
  },


}
</script>
