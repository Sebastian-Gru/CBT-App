<template>
  <q-page class="flex q-pa-md">



    <q-card flat bordered class="my-card fixed-bottom-right q-ma-md q-pa-md">
      <q-card-section>
        <div class="text-h6">Solid User Name: </div>

      </q-card-section>
      <q-card-section>
        <div class="text-h6">Your Web ID:</div>

      </q-card-section>

      <q-separator inset />

      <q-card-section class="q-pt-none">


        <div class="text-h6">Your name:</div>
        Solid Name: <br>
        Role: <br>
        Organization: <br>
      </q-card-section>
      <q-card-section class="q-pt-none">

        <q-btn
          size="22px"
          label="Logout"
         />

      </q-card-section>

    </q-card>

  </q-page>
</template>

<script>

    export default {
        data() {
            return {

            }
        },
        computed: {


        },
        methods: {

            changePeer(x) {
                console.log("User: " + x);

            },


        },


    }

</script>

