<template>
  <v-dialog v-model="dialog" max-width="500px" @click:outside="close">
    <v-card>
      <v-card-title>
        <span class="text-h5">Edit teachers</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                name="trainingName"
                v-validate="'required|alpha_spaces'"
                :class="{
                  input: true,
                  'is-danger': errors.has('trainingName'),
                }"
                v-model="current.name"
                label="trainingName"
              ></v-text-field>
              <i v-show="errors.has('trainingName')" class="fa fa-warning"></i>
              <span
                v-show="errors.has('trainingName')"
                class="help is-danger"
                >{{ errors.first("trainingName") }}</span
              >
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-select
                v-model="current.teacher"
                label="teacher"
                :items="teachers"
                item-text="firstname"
                return-object
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-select
                v-model="current.students"
                label="student"
                :items="students"
                item-text="firstname"
                return-object
                multiple
              ></v-select>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
        <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "Edit",
  mounted() {
    this.current = Object.assign({}, this.trainings);
  },
  props: {
    dialog: Boolean,
    trainings: {
      type: Object,
    },
  },

  data: () => ({
    current: {
      name: "",
      teacher: {},
      students: [{}],
    },

    students: [
      {
        firstname: "amar",
        lastname: "halim",
        age: "80000",
        phone: "0999999999",
      },
      {
        firstname: "faride",
        lastname: "fatma",
        age: "80000",
        phone: "0999999999",
      },
      {
        firstname: "hhello",
        lastname: "world",
        age: "80000",
        phone: "0999999999",
      },
    ],

    teachers: [
      {
        firstname: "yasser",
        lastname: "laroussi",
        email: "larouyasser28@gmail.com",
        phone: "+213541643058",
        national: "955125654",
      },
      {
        firstname: "ala",
        lastname: "hrdawi",
        email: "larouyasser28@gmail.com",
        phone: "+213541643058",
        national: "955125654",
      },
      {
        firstname: "amar",
        lastname: "karim",
        email: "larouyasser28@gmail.com",
        phone: "+213541643058",
        national: "955125654",
      },
      {
        firstname: "samir",
        lastname: "laro",
        email: "larouyasser28@gmail.com",
        phone: "+213541643058",
        national: "955125654",
      },
      {
        firstname: "sasa",
        lastname: "la",
        email: "larouyasser28@gmail.com",
        phone: "+213541643058",
        national: "955125654",
      },
    ],
  }),

  methods: {
    close() {
      this.$emit("closeDialog");
      this.$validator.reset();
    },

    save() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.$emit("Edittraining", this.current);
          this.close();
        }
      });
    },
  },
};
</script>
