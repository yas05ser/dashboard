<template>
  <v-dialog v-model="dialog" max-width="500px" @click:outside="close">
    <v-card>
      <v-card-title>
        <span class="text-h5">Dtails</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="12" md="12">
              <h3>Firstname: {{ student.firstname }}</h3>
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <h3>Lastname: {{ student.lastname }}</h3>
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <h3>Age: {{ student.age }}</h3>
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <h3>phone: {{ student.phone }}</h3>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
    </v-card>
  </v-dialog>
</template>
  
  <script>
export default {
  name: "Details",

  props: {
    dialog: Boolean,
    student: {
      type: Object,
    },
  },

  methods: {
    close() {
      this.$emit("closeDialog");
    },
  },
};
</script>
  
  