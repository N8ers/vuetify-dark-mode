<template>
  <v-app>
    <v-app-bar app color="primary">Dark Mode Toggle Example</v-app-bar>

    <v-main>
      <v-container>
        <v-switch 
          :value="darkMode" 
          @change="toggleDarkMode" 
          :label="`toggle ${switchLabel} mode`"
        ></v-switch>
        <v-col class="primary">I am a primary card</v-col>
        <v-col class="secondary">I am a secondary card</v-col>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({ 
      darkMode: false
    }),
    methods: {
      toggleDarkMode: function () {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        this.darkMode = !this.darkMode;
      }
    },
    computed: {
      switchLabel: function () {
        return this.darkMode ? 'light' : 'dark';
      }
    }
};
</script>
