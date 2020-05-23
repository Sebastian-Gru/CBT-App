<template>
  <q-page class="flex q-pa-md">

     <h1 class="flex-md-center">{{name}}</h1>
    <q-page-sticky position="bottom-right" :offset="[30, 30]">
      <q-btn fab icon="add" color="accent" />
    </q-page-sticky>
  </q-page>
</template>

<script>
import {mapGetters} from 'vuex'
export default {

    computed: {
        ...mapGetters({
            name: 'DataStore/nameGetter'
        })

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
