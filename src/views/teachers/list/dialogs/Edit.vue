<template>
  <v-dialog v-model="dialog" max-width="500px" @click:outside="close">
    <v-card>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                name="firstName"
                v-validate="'required|alpha_spaces'"
                :class="{ input: true, 'is-danger': errors.has('firstName') }"
                v-model="current.firstname"
                label="firstname"
              ></v-text-field>
              <i v-show="errors.has('firstName')" class="fa fa-warning"></i>
              <span v-show="errors.has('firstName')" class="help is-danger">{{
                errors.first("firstName")
              }}</span>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                name="lastname"
                v-validate="'required|alpha_spaces'"
                :class="{ input: true, 'is-danger': errors.has('lastname') }"
                v-model="current.lastname"
                label="last name"
              ></v-text-field>
              <i v-show="errors.has('lastname')" class="fa fa-warning"></i>
              <span v-show="errors.has('lastname')" class="help is-danger">{{
                errors.first("lastname")
              }}</span>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                v-model="current.email"
                name="email"
                v-validate="'required|email'"
                :class="{ input: true, 'is-danger': errors.has('email') }"
                label="email"
              ></v-text-field>
              <i v-show="errors.has('email')" class="fa fa-warning"></i>
              <span v-show="errors.has('email')" class="help is-danger">{{
                errors.first("email")
              }}</span>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                v-model="current.phone"
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
              <v-col cols="6" sm="12" md="12">
                <v-text-field
                  v-model="current.national"
                  name="national"
                  v-validate="'digits:9'"
                  :class="{ input: true, 'is-danger': errors.has('national') }"
                  label="national"
                ></v-text-field>
                <i v-show="errors.has('national')" class="fa fa-warning"></i>
                <span v-show="errors.has('national')" class="help is-danger">{{
                  errors.first("national")
                }}</span>
              </v-col>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
        <v-btn color="blue darken-1" text @click="save" :disabled="isequal">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
  
  <script>
export default {
  name: "Edit",
  data: () => ({
    current: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      national: "",
    },
  }),
  computed: {
    isequal() {
      return this.lodash.isEqual(this.current, this.teachers);
    },
  },

  props: {
    dialog: Boolean,
    teachers: {
      type: Object,
    },
  },
  mounted() {
    this.current = Object.assign({}, this.teachers);
  },

  methods: {
    close() {
      this.$emit("closeDialog");
      this.$validator.reset();
    },

    save() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.$emit("EditItem", this.current);
          this.close();
        }
      });
    },
  },
};
</script>
  
  