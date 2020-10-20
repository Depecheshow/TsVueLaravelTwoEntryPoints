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
export default class TabBuildings extends Vue {
  name = 'Units'
  items: ListItemInterface[] = [
    {
      name: 'СС',
      buildTime: 71,
      minerals: 400,
      gas: 0,
      require: [],
      supplyValue: 16,
    },
    {
      name: 'Supply Depot',
      buildTime: 26,
      minerals: 100,
      gas: 0,
      require: [],
      supplyValue: 8,
    },
    {
      name: 'Barracks',
      buildTime: 46,
      minerals: 150,
      gas: 0,
      require: ['CC'],
    },
  ]

}
</script>

<style lang="scss">

</style>
