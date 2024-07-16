<template>
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: vue-remote</div>
    <div>Framework: vue3</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
    <Counter />
  </div>
</template>

<script>
import Counter from "./Counter.vue";

export default {
  components: {
    Counter,
  },
};
</script>