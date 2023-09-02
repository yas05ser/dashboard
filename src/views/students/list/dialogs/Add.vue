<template>
  <v-dialog v-model="dialog" max-width="500px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
        New student
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">New student</span>
      </v-card-title>
      
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                name="firstName"
                v-validate="'required|alpha_spaces'"
                :class="{ input: true, 'is-danger': errors.has('firstName') }"
                v-model="student.firstname"
                label="firstname"
              ></v-text-field>
              <i v-show="errors.has('firstName')" class="fa fa-warning"></i>
              <span v-show="errors.has('firstName')" class="help is-danger">{{
                errors.first("firstName")
              }}</span>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                name="lastname"
                v-validate="'required|alpha_spaces'"
                :class="{ input: true, 'is-danger': errors.has('lastname') }"
                v-model="student.lastname"
                label="last name"
              ></v-text-field>
              <i v-show="errors.has('lastname')" class="fa fa-warning"></i>
              <span v-show="errors.has('lastname')" class="help is-danger">{{
                errors.first("lastname")
              }}</span>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="student.age"
                name="age"
                v-validate="'required|numeric'"
                :class="{ input: true, 'is-danger': errors.has('age') }"
                label="age"
              ></v-text-field>
              <i v-show="errors.has('age')" class="fa fa-warning"></i>
              <span v-show="errors.has('age')" class="help is-danger">{{
                errors.first("age")
              }}</span>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="student.phone"
                name="phone"
                v-validate="{
                  required: true,
                  regex: /^(00213|\+213|0)(5|6|7)[0-9]{8}$/,
                }"
                label="phone"
              ></v-text-field>
              <i v-show="errors.has('phone')" class="fa fa-warning"></i>
              <span v-show="errors.has('phone')" class="help is-danger">{{
                errors.first("phone")
              }}</span>
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
  name: "Add",

  data: () => ({
    dialog: false,

    student: {
      firstname: "",
      lastname: "",
      age: "",
      phone: "",
    },
  }),

  methods: {
    close() {
      this.dialog = false;
      this.student = {
        firstname: "",
        lastname: "",
        age: "",
        phone: "",
      };
      this.$validator.reset();

    },

    save() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.$emit("addStudent", this.student);
          this.close();
        }
      });
    },
  },
};
</script>

