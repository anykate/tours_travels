import App from "@/App.vue";
import { createApp } from "vue";

import router from "@/router";

// Vuetify
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#FEF5F8",
          secondary: "5CBBF6",
        },
      },
    },
  },
});

createApp(App).use(vuetify).use(router).mount("#app");
