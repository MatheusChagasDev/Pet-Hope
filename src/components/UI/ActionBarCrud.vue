<template>
  <v-toolbar class="rounded-lg">
    <v-row>
      <slot name="simpleFilter"></slot>
      <v-col cols="auto">
        <v-btn
          v-if="search"
          color="#35909D"
          dark
          fab
          tile
          small
          class="mr-4 rounded-button"
        >
          <v-icon dark> mdi-magnify </v-icon>
        </v-btn>

        <v-btn
          v-if="resetForm"
          color="#35909D"
          dark
          fab
          tile
          small
          class="mr-4 rounded-button"
          @click="resetForm"
        >
          <v-icon dark> mdi-backspace-outline </v-icon>
        </v-btn>
        <v-btn
          v-if="advancedFilter"
          color="#cde3e4"
          dark
          fab
          tile
          small
          class="mr-4 rounded-button"
          @click="sendEmitFilter"
        >
          <v-icon dark color="#8fc2c9"> mdi-filter-outline </v-icon>
          <v-badge
            bottom
            overlap
            offset-x="5"
            offset-y="-10"
            content="5"
            color="#35909D"
          ></v-badge>
        </v-btn>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="auto">
        <v-btn
          v-if="create"
          :to="{ name: routeName }"
          color="#35909D"
          dark
          fab
          tile
          small
          class="mr-4 rounded-button"
        >
          <v-icon dark> mdi-plus </v-icon>
        </v-btn>
        <v-btn
          v-if="players"
          :to="{ name: routePlayers }"
          color="#35909D"
          dark
          fab
          tile
          small
          class="mr-4 rounded-button"
        >
          <v-icon dark> mdi-television-play </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-toolbar>
</template>
<script>
export default {
  props: {
    advancedFilter: {
      type: Boolean,
      default: true,
    },
    resetForm: {
      type: Boolean,
      default: false,
    },
    search: {
      type: Boolean,
      default: false,
    },
    create: {
      type: Boolean,
      default: false,
    },
    players: {
      type: Boolean,
      default: false,
    },
    routePlayers: {
      type: String,
    },
    routeName: {
      type: String,
      required: true,
    },
  },

  methods: {
    sendEmitFilter() {
      this.$emit("openFilter", true);
    },
  },
};
</script>
