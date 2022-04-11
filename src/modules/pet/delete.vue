<template>
  <v-dialog v-model="dialog" persistent width="75vh">
    <v-card class="pa-3 rounded-lg">
      <v-card-title class="subtitle-1 font-weight-medium">
        Confirmar a exclusão do conteúdo?
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
          :to="{ name: 'Pets' }"
          dense
        >
          Cancelar
        </v-btn>
        <v-btn dark @click="deletePet" filled dense class="red pa-3">
          Excluir
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "DeletePet",
  data() {
    return {
      dialog: true,
    };
  },
};
</script>
