import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.purple,
        secondary: colors.blue,
        accent: colors.shades.black,
      },
      dark: {
        primary: colors.blue.lighten3,
        secondary: colors.pink,
        accent: colors.shades.yellow,
      },
    },
  },
});
