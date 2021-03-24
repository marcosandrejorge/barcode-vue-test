import Vue from "vue";
import Vuetify from "vuetify/lib";
import { VTextField } from 'vuetify/lib';
import colors from "vuetify/lib/util/colors";
import pt from "vuetify/es5/locale/pt";

import 'vuetify/dist/vuetify.min.css';

Vue.use(
    Vuetify,
    { components: { VTextField } }
);

export default new Vuetify({
    lang: {
        locales: { pt },
        current: "pt"
    },
    theme: {
        themes: {
            light: {
                primary: colors.blue.base,
                secondary: colors.orange.base,
                accent: colors.red.base
            }
        }
    }
});