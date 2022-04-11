<template>
  <v-dialog persistent v-model="dialog">
    <v-card class="pa-3 rounded-lg">
      <v-card-title class="subtitle-1 font-weight-medium">
        Confirmar a exclusão?
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col class="pa-1">
            <v-alert border="left" colored-border color="red" dense text>
              <strong>Atenção!</strong> Essa é uma ação
              <strong class="red--text font-weight-black">irreversível</strong>.
            </v-alert>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="darken-1"
          text
          @click="dialog = false"
          :to="{ name: mainRoute }"
          dense
        >
          Cancelar
        </v-btn>
        <v-btn
          dark
          @click="dialog = false"
          :to="{ name: mainRoute }"
          filled
          dense
          class="red pa-3"
        >
          Excluir
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "Delete",
  props: {
    mainRoute: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      dialog: true,
    };
  },
};
</script>
