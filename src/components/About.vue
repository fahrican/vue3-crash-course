<script setup lang="ts">
import Child from "./Child.vue";
import {ref, provide} from "vue";
import {useData} from "../use/useComposable.ts";

const {data, setName} = useData();

let userName = ref("Piters");

const changeIt = (data: string) => {
  console.log(data);
  userName.value = data;
};

provide("propvalue", userName);

</script>

<template>
  <div>
    <h1>{{ data.name }}</h1>
    <button @click="setName"> set name</button>
    <h2>About Site</h2>
    <Child :name="userName" @change-string="changeIt">
      <template v-slot:slot2>
        <h2>Slot Überschrift 1</h2>
        <p>Unser Slot Content 1</p>
      </template>
      <template #slot1>
        <h2>Slot Überschrift 2</h2>
        <p>Unser Slot Content 2</p>
      </template>
    </Child>
  </div>
</template>

<style scoped>

</style>