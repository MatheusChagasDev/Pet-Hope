<template>
  <v-dialog back persistent v-model="dialog" width="60%">
    <v-card>
      <v-card-title class="pl-12"
        >Cadastrar Papais e Mamães

        <v-spacer></v-spacer>

        <v-btn color="white" text :to="{ name: 'Parents' }">
          <v-icon color="#5E6278"> mdi-close </v-icon>
        </v-btn>
      </v-card-title>

      <v-divider class="mb-5"></v-divider>

      <v-row>
        <v-col cols="8">
          <v-text-field
            label="Nome"
            v-model="form.name"
            filled
            rounded
            dense
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="d-flex" cols="8">
          <v-select
            :items="sex"
            v-model="form.sex"
            filled
            rounded
            dense
            label="Sexo"
          ></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="8">
          <v-text-field
            label="E-mail"
            v-model="form.email"
            filled
            rounded
            dense
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="8">
          <v-text-field
            label="Telefone"
            v-model="form.tel"
            filled
            rounded
            dense
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="8">
          <v-text-field
            label="Data de nascimento"
            v-model="form.birth"
            filled
            rounded
            dense
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="8">
          <v-text-field
            label="Doações"
            v-model="form.donate"
            filled
            rounded
            dense
          ></v-text-field>
        </v-col>
      </v-row>

      <v-divider class="pb-2"></v-divider>

      <v-row class="mt-2">
        <v-spacer></v-spacer>
        <v-col class="mr-4" cols="2">
          <v-btn
            :disabled="invalid"
            height="35px"
            tile
            class="rounded white--text"
            small
            color="#3DA539"
            @click="verifyTypeForm"
          >
            Cadastrar
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "CreateParents",
  data() {
    return {
      sex: ["Masculino", "Feminino"],
      form: {
        name: "",
        sex: [],
        email: "",
        tel: "",
        birth: "",
        donation: "",
      },
      dialog: true,
    };
  },
  methods: {},
};
</script>
