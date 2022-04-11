<template>
  <div>
    <v-row>
      <v-col cols="4">
        <span
          class="d-block text-h4 font-weight-bold primaryCyan--text"
          style="line-height: 30px"
          >{{ $route.meta.title }}</span
        >
        <small class="primaryCyan--text ml-1">
          {{ $route.meta.subtitle }}
        </small>
      </v-col>
    </v-row>
    <hr class="mb-4 mt-3" style="opacity: 0.2" />
  </div>
</template>
