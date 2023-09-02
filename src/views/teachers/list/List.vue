<template>
  <v-data-table
    :headers="headers"
    :items="teachers"
    sort-by="phone"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>teachers info</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <Details
          v-if="dialogDetails"
          :dialog="dialogDetails"
          @closeDialog="closeDialogDetails"
          :teachers="current"
        />

        <Add @addteachers="addTeachers" />

        <Edit
          v-if="dialogEdit"
          @EditItem="editTeachers"
          @closeDialog="closeDialogEdit"
          :dialog="dialogEdit"
          :teachers="current"
        />

        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >Are you sure you want to delete this item?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="OpenEdit(item)"> mdi-pencil </v-icon>
      <v-icon small class="mr-2" @click="deleteItem(item)"> mdi-delete </v-icon>
      <v-icon small class="mr-2" @click="OpenDetails(item)">
        mdi-alert-circle-outline
      </v-icon>
    </template>
  </v-data-table>
</template>

<script>
import Add from "./dialogs/Add.vue";
import Details from "./dialogs/Details.vue";
import Edit from "./dialogs/Edit.vue";
export default {
  components: {
    Add,
    Details,
    Edit,
  },

  data: () => ({
    dialogDelete: false,
    dialogDetails: false,
    dialogEdit: false,

    headers: [
      {
        text: "first name",
        align: "start",
        sortable: false,
        value: "firstname",
      },
      { text: "last name", value: "lastname" },
      { text: "Email", value: "email" },
      { text: "phone", value: "phone" },
      { text: "n°carte nationale", value: "national" },
      { text: "Actions", value: "actions", sortable: false },
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
        firstname: "yasser",
        lastname: "laroussi",
        email: "larouyasser28@gmail.com",
        phone: "+213541643058",
        national: "955125654",
      },
      {
        firstname: "yasser",
        lastname: "laroussi",
        email: "larouyasser28@gmail.com",
        phone: "+213541643058",
        national: "955125654",
      },
      {
        firstname: "yasser",
        lastname: "laroussi",
        email: "larouyasser28@gmail.com",
        phone: "+213541643058",
        national: "955125654",
      },
      {
        firstname: "yasser",
        lastname: "laroussi",
        email: "larouyasser28@gmail.com",
        phone: "+213541643058",
        national: "955125654",
      },
    ],

    currentIndex: -1,

    current: null,
  }),

  watch: {
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  methods: {
    OpenDetails(item) {
      this.current = Object.assign({}, item);
      this.dialogDetails = true;
    },
    OpenEdit(item) {
      this.currentIndex = this.teachers.indexOf(item);
      this.current = Object.assign({}, item);
      this.dialogEdit = true;
    },

    closeDialogDetails() {
      this.dialogDetails = false;
      this.current = null;
    },
    closeDialogEdit() {
      this.dialogEdit = false;
      this.current = null;
    },
    addTeachers(teacher) {
      this.teachers.push(teacher);
    },

    editTeachers(teacher) {
      Object.assign(this.teachers[this.currentIndex], teacher);
    },

    deleteItem(item) {
      this.currentIndex = this.teachers.indexOf(item);
      this.current = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.teachers.splice(this.currentIndex, 1);
      this.closeDelete();
    },

    closeDelete() {
      this.dialogDelete = false;
      this.current = null;
      this.currentIndex = -1;
    },
  },
};
</script>