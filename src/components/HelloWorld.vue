<script setup lang="ts">
import {ref, computed, watch} from 'vue'
import {nameStore} from "../store/store.ts";

const store = nameStore();
let x = ref(10);
let name = ref("");

let increase = () => {
  x.value += 1;
}

let decrease = () => {
  x.value -= 1;
}

let computedValue = computed(() => {
  if (x.value < 5) {
    return "smaller than five";
  } else {
    return "larger than five";
  }
});

watch(() => x.value, (newVal, oldVal) => {
  console.log("new value: " + newVal + " old value: " + oldVal);
})

let todos = [{desc: "buy new boots", done: false}, {desc: "write support", done: true}, {
  desc: "adapt repo",
  done: false
}]
</script>

<template>
  <div>
    <h1>Hello World</h1>
    <button v-on:click="decrease">decrease</button>
    <p>number: {{ x }}</p>
    <button v-on:click="increase">increase</button>
    <p>{{ computedValue }}</p>
    <p>Hello {{ name }}</p>
    <input type="text" v-model="name"/>
    <p v-if="x.valueOf() > 10">Greater than 10</p>
    <p v-else>Less than 10</p>
    <p>{{store.name}}'s age: {{ store.age}}</p>
    <p>{{ store.tooOld}}</p>
  </div>
  <hr/>
  <div v-for="(item, index) in todos" :key="item.desc">
    <p :class="{open: !item.done, done: item.done }">{{ index }} : {{ item.desc }} </p>
  </div>
</template>

<style scoped>

.open {
  background-color: darkred;
  color: white;
}

.done {
  background-color: darkgreen;
  color: white;
}
</style>
