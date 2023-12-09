<script setup lang="ts">
import {inject} from "vue";
import {nameStore} from "../store/store.ts";

const store = nameStore();
const name = "Ali";
let props = defineProps({
  name: {
    type: String,
    default: "Unbekannter User"
  }
});

const emit = defineEmits(["changeString"]);

const handleClick = () => {
  emit("changeString", name);
};

const firstName = inject("propvalue");


</script>

<template>
  <h3>{{ props.name }}</h3>
  <p>{{ firstName }}</p>
  <p>{{ store.name }}</p>
  <p>{{ store.age }}</p>
  <button @click="store.increaseAge()">increase age</button>
  <slot name="slot1"></slot>
  <button @click="handleClick">Change String</button>
  <slot name="slot2"></slot>
</template>

<style scoped>

</style>