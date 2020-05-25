<template>

  <q-page class="flex q-pa-md">
    <q-list
      class="full-width"
      separator>
      <q-item
        v-for="log in moodlogGetter"
        :key="log.id"
        to="/chat"
        clickable v-ripple
      >

        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            X
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ log.upsettingEvent }}</q-item-label>
        </q-item-section>

        <q-item-section side>

          <q-badge
            :color = 'log.finished? "light-green-5": "orange"'>
           {{ log.finished == true? 'Done': 'Open'}}
          </q-badge>

        </q-item-section>
      </q-item>
    </q-list>
    <q-page-sticky position="bottom-right" :offset="[30, 30]">
      <q-btn fab icon="add" color="accent" />
    </q-page-sticky>
  </q-page>


</template>

<script>
import {mapGetters, mapState} from 'vuex'
export default {

    computed: {
        ...mapGetters('DataStore', ['moodlogGetter']),
    },

    methods: {


    },
    created() {
        console.log("Index is created")
    },
    mounted() {
        console.log("Index is mounted")
    }
}

</script>
