import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import './assets/global.scss'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

library.add(faTrash, faPenToSquare);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
