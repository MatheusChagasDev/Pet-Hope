<template>
  <v-row>
    <v-col>
      <v-card class="rounded-lg">
        <v-card-title class="rounded-lg">
          <v-row>
            <v-col cols="auto">
              <v-text-field
                v-model="search"
                prepend-icon="mdi-magnify"
                label="Buscar"
                tile
                fab
                small
              ></v-text-field>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="auto">
              <v-btn
                color="#CBE2E6"
                fab
                dark
                tile
                small
                class="mr-4 rounded-button"
              >
                <v-icon dark color="#3A4B8D"> mdi-filter-outline </v-icon>
                <v-badge
                  bottom
                  overlap
                  offset-x="5"
                  offset-y="-10"
                  content="5"
                  color="#3A4B8D"
                ></v-badge>
              </v-btn>
              <v-btn
                color="#3A4B8D"
                fab
                dark
                tile
                small
                class="mr-4 rounded-button"
                :to="{ name: 'CreateParents' }"
              >
                <v-icon dark fab> mdi-plus </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-title>
        <v-row justify="center">
          <v-col cols="12">
            <v-data-table
              :headers="headers"
              :items="parent"
              item-key="_id"
              class="elevation-8"
            >
              <template v-slot:[`item.actions`]="{ item }">
                <ActionButtons
                  :item="item"
                  editRoute="EditParent"
                  deleteRoute="DeleteParent"
                />
              </template>
              <template v-slot:[`item.pets`]="{ item }">
                <span class="d-block">
                  {{ item.name }}
                  <small class="d-block">{{ item.group }}</small>
                </span>
              </template>
            </v-data-table>
          </v-col>
        </v-row>
        <router-view @created="showSnack"></router-view>
        <v-snackbar v-model="snackbar" color="green">
          Terminal {{ data.name }} {{ typeForm }} com sucesso!

          <template v-slot:action="{ attrs }">
            <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </template>
        </v-snackbar>
      </v-card>
    </v-col>
  </v-row>
</template>

<style lang="stylus"></style>

<script>
import ActionButtons from "../../components/DataTable/ActionButtons";
export default {
  data() {
    return {
      data: {},
      headers: [
        {
          text: "Nome",
          value: "name",
        },
        { text: "Sexo", value: "sex" },
        { text: "E-mail", value: "email" },
        { text: "Telefone", value: "tel" },
        { text: "Data de nascimento", value: "birth" },
        { text: "Doações", value: "donate" },
        { text: "Ações", value: "actions" },
      ],
      parent: [],
      snackbar: false,
      typeForm: "criado",
    };
  },
  components: {
    ActionButtons,
  },
};
</script>
