<template>
  <v-navigation-drawer
    v-model="drowner"
    app
    color="#3A4B8D"
    class="rounded-r-xl"
  >
    <v-sheet color="#3A4B8D" class="pa-4 white--text">
      <h1>PETHOPE</h1>
    </v-sheet>
    <v-list color="#3A4B8D">
      <v-list-item v-for="item in items" :key="item.icon" link :to="item.to">
        <v-list-item-icon>
          <v-icon color="#FFFFFF">{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="white--text">{{
            item.title
          }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({ authenticated: "$_auth/authenticated" }),
  },
  data() {
    return {
      drowner: true,
      items: [
        { title: "Pets", icon: "mdi-paw", to: "/pet" },
        {
          title: "Mamães e Papais",
          icon: "mdi-account-multiple-outline",
          to: "/parent",
        },
        //{ title: "Doação", icon: "mdi-crosshairs-gps", to: "/donation" },
      ],
    };
  },
};
</script>
<style lang="stylus">
.v-application {
background-color: #F3F6F9 !important;
}
</style>
