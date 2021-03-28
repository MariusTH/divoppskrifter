<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="logo.png"
          transition="scale-transition"
          width="60"
        />

        Div oppskrifter
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <Page/>
    </v-main>
  </v-app>
</template>

<script>
import Page from './components/Page';

export default {
  name: 'App',

  components: {
    Page,
  },

  data: () => ({
    //
  }),
};
</script>
