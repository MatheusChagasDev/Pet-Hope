import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/",
  },
  {
    path: "/pet",
    name: "Pets",
    meta: {
      title: "Pets",
      subtitle: "Visualização dos pets",
    },
    component: () => import(/* webpackChunkName: "about" */ "../modules/pet"),
    children: [
      {
        path: "create",
        name: "CreatePets",
        meta: {
          title: "Pets",
          subtitle: "Adicionar pet",
        },
        component: () => import("../modules/pet/create"),
      },
      {
        path: ":id/edit",
        name: "EditPets",
        meta: {
          title: "Pets",
          subtitle: "Editar pet",
        },
        component: () => import("../modules/pet/edit"),
      },
      {
        path: ":id/delete",
        name: "DeletePets",
        meta: {
          title: "Pets",
          subtitle: "Deletar pet",
        },
        component: () => import("../modules/pet/delete"),
      },
    ],
  },
  {
    path: "/parent",
    name: "Parents",
    meta: {
      title: "Pais",
      subtitle: "Visualização dos pais",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../modules/parent"),
    children: [
      {
        path: "create",
        name: "CreateParents",
        meta: {
          title: "Pais",
          subtitle: "Adicionar pais",
        },
        component: () => import("../modules/parent/create"),
      },
      {
        path: ":id/edit",
        name: "EditParents",
        meta: {
          title: "Pais",
          subtitle: "Editar pais",
        },
        component: () => import("../modules/parent/create"),
      },
      {
        path: ":id/delete",
        name: "DeleteParents",
        meta: {
          title: "Pais",
          subtitle: "Deletar pais",
        },
        component: () => import("../modules/parent/delete"),
      },
    ],
  },
  {
    path: "/donation",
    name: "Donations",
    meta: {
      title: "Doações",
      subtitle: "Visualização das doações",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../modules/donation"),
    children: [
      {
        path: "create",
        name: "CreateDonation",
        meta: {
          title: "Doações",
          subtitle: "Adicionar doações",
        },
        component: () => import("../modules/donation/create"),
      },
      {
        path: ":id/edit",
        name: "EditDonation",
        meta: {
          title: "Doações",
          subtitle: "Editar doações",
        },
        component: () => import("../modules/donation/create"),
      },
      {
        path: ":id/delete",
        name: "DeleteDonation",
        meta: {
          title: "Doações",
          subtitle: "Deletar doações",
        },
        component: () => import("../modules/donation/delete"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
