<template>
  <v-app id="inspire">
    <br />
    <br />

    <v-navigation-drawer v-model="drawer" app>
      <v-sheet color="grey lighten-4" class="pa-4">
        <v-avatar class="mb-4" color="grey darken-1" size="64"></v-avatar>

        <div>larouyasser28@gmail.com</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="(lin, index) in links"
          :key="index"
          :to="lin.path"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ lin.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ lin.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    links: [
      { icon: "mdi-home", text: "home", path: "/" },
      { icon: "mdi-alert-octagon", text: "about", path: "/about" },
      { icon: "mdi-account", text: "student", path: "/index" },
      { icon: "mdi-account-circle", text: "teachers", path: "/teachers" },
      { icon: "mdi-seat-recline-extra", text: "training", path: "/training" },
    ],
  }),
};
</script>
