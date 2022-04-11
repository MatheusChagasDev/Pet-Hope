<template>
  <v-dialog back persistent v-model="dialog" width="60%">
    <v-card>
      <v-card-title class="pl-12"
        >Cadastrar Pet

        <v-spacer></v-spacer>

        <v-btn color="white" text :to="{ name: 'Pets' }">
          <v-icon color="#5E6278"> mdi-close </v-icon>
        </v-btn>
      </v-card-title>

      <v-divider class="mb-5"></v-divider>

      <v-row>
        <v-col cols="8">
          <v-text-field
            label="Raça"
            v-model="form.breed"
            filled
            rounded
            dense
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="8">
          <v-text-field
            label="Sexo"
            v-model="form.sex"
            filled
            rounded
            dense
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="8">
          <v-text-field
            label="Pelagem"
            v-model="form.fur"
            filled
            rounded
            dense
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="8">
          <v-text-field
            label="Cor"
            v-model="form.color"
            filled
            rounded
            dense
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="8">
          <v-text-field
            label="Data de resgate"
            v-model="form.rescue"
            filled
            rounded
            dense
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="8">
          <v-text-field
            label="Problemas de saúde"
            v-model="form.health"
            filled
            rounded
            dense
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="d-flex" cols="8">
          <v-select
            :items="items"
            v-model="form.size"
            filled
            rounded
            dense
            label="Porte"
          ></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="d-flex" cols="8">
          <v-select
            :items="collar"
            v-model="form.collar"
            filled
            rounded
            label="Coleira"
            dense
          ></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="8">
          <v-text-field
            label="Banhos"
            v-model="form.bath"
            filled
            rounded
            dense
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="8">
          <v-text-field
            label="Dono"
            v-model="form.owner"
            filled
            rounded
            dense
          ></v-text-field>
        </v-col>
      </v-row>
      <v-divider class="pb-2"></v-divider>

      <v-row>
        <v-spacer></v-spacer>
        <v-col class="mr-4" cols="2">
          <v-btn
            :disabled="invalid"
            height="35px"
            tile
            class="rounded white--text"
            small
            color="#3DA539"
            @click="createPet"
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
  name: "CreatePet",
  data() {
    return {
      items: ["Mini", "Pequeno", "Médio", "Grande"],
      collar: ["Sim", "Não"],
      form: {
        breed: "",
        sex: "",
        fur: "",
        color: "",
        rescue: "",
        health: "",
        size: [],
        collar: [],
        bath: "",
        owner: "",
      },
      dialog: true,
    };
  },
};
</script>
