<template>
  <div>
    <h1>{{ name }}</h1>
    <ul class="list-group shadow">
      <li
          class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
          v-for="(item, index) in items"
          v-bind:key="index"
      >
        <div class="mr-auto">{{ item.name }}</div>
        <div class="p-1">{{ item.minerals }}</div>
        <div class="p-1">{{ item.gas }}</div>
        <div class="p-1 mr-2">{{ item.buildTime }}</div>
        <button
            class="btn btn-primary"
            v-on:click="$emit('add-item', [item, index])"
        >Add</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import ListItemInterface from "@/interfaces/ListItemInterface";

@Component
export default class TabUnits extends Vue {
  name = 'Units'
  items: ListItemInterface[] = [
    {
      name: 'SCV',
      buildTime: 12,
      minerals: 50,
      gas: 0,
      require: [],
      supplyCost: 1,
    },
    {
      name: 'Marine',
      buildTime: 18,
      minerals: 50,
      gas: 0,
      require: ['Barracks'],
      supplyCost: 1,
    },
  ]

}
</script>

<style lang="scss">

</style>
