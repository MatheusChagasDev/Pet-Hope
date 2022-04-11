<template>
  <div>
    <v-btn
      v-if="editRoute"
      icon
      :to="{ name: editRoute, params: { id: item._id } }"
    >
      <v-icon> mdi-pencil-outline </v-icon>
    </v-btn>
    <v-btn
      v-if="previewRoute"
      icon
      :to="{ name: previewRoute, params: { id: item._id } }"
    >
      <v-icon> mdi-filmstrip </v-icon>
    </v-btn>
    <v-btn
      v-if="copyRoute"
      icon
      :to="{ name: copyRoute, params: { id: item._id } }"
    >
      <v-icon> mdi-content-copy </v-icon>
    </v-btn>
    <v-btn
      v-if="deleteRoute"
      icon
      :to="{ name: deleteRoute, params: { id: item._id } }"
    >
      <v-icon> mdi-delete-outline </v-icon>
    </v-btn>
    <v-btn
      v-if="androidRoute"
      icon
      :to="{ name: androidRoute, params: { id: item._id } }"
    >
      <v-icon> mdi-android </v-icon>
    </v-btn>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
    },
    deleteRoute: {
      type: String,
    },
    editRoute: {
      type: String,
    },
    editplaylistRoute: {
      type: String,
    },
    androidRoute: {
      type: String,
    },
    copyRoute: {
      type: String,
    },
    previewRoute: {
      type: String,
    },
  },
};
</script>
