<template>
  <v-data-table
    :headers="headers"
    :items="training"
    sort-by="student"
    class="elevation-1"
  >
    <template v-slot:item.teacher="{ item }">
      {{ item.teacher.firstname }} {{ item.teacher.lastname }}
    </template>
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>training info</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <Details
          v-if="dialogDetails"
          :dialog="dialogDetails"
          @closeDialog="closeDialogDetails"
          :trainings="current"
        />

        <Add @addtraining="addtraining" />

        <Edit
          v-if="dialogEdit"
          @Edittraining="edittraining"
          @closeDialog="closeDialogEdit"
          :dialog="dialogEdit"
          :trainings="current"
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
import Add from "./dialog/Add.vue";
import Details from "./dialog/Details.vue";
import Edit from "./dialog/Edit.vue";
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
        text: "training name",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "teacher name", value: "teacher" },
      { text: "numeber of students ", value: "students.length" },
      { text: "Actions", value: "actions", sortable: false },
    ],

    training: [
      {
        name: "math",
        teacher: {
          firstname: "yasser",
          lastname: "laroussi",
          email: "larouyasser28@gmail.com",
          phone: "+213541643058",
          national: "955125654",
        },
        students: [
          {
            firstname: "hhhhhhhhhhhhhhh",
            lastname: "hhhhhhhhhhhhhhhhhhh",
            age: "80000",
            phone: "0999999999",
          },
          {
            firstname: "llllllfkfkf",
            lastname: "hhhhhhhhhhhhhhhhhhh",
            age: "80000",
            phone: "0999999999",
          },
        ],
      },
    ],

    currentIndex: -1,

    current: {},
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
      this.currentIndex = this.training.indexOf(item);
      this.current = Object.assign({}, item);
      this.dialogEdit = true;
    },

    closeDialogDetails() {
      this.dialogDetails = false;
    },
    closeDialogEdit() {
      this.dialogEdit = false;
    },
    addtraining(trainings) {
      this.training.push(trainings);
    },

    edittraining(traine) {
      Object.assign(this.training[this.currentIndex], traine);
    },

    deleteItem(item) {
      this.currentIndex = this.training.indexOf(item);
      this.current = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.training.splice(this.currentIndex, 1);
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
