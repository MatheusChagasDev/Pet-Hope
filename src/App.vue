<template>
  <v-app>
    <sidebar v-if="$route.name != 'Login'"></sidebar>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from "./components/Sidebar";
//import PageTitle from "./components/UI/PageTitle";
//import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Sidebar,
    //PageTitle,
    //Errors,
  },

  data: () => ({
    //
  }),
};
</script>
