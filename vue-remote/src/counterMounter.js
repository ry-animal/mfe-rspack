import { createApp } from "vue";

import "./index.scss";

import Counter from "./Counter.vue";

export default function mount(el) {
  createApp(Counter).mount(el);
}
