<template>
  <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
    <div
        class="p-1"
        v-bind:class="{ 'text-danger': isOverCupped }"
    >
      <span>{{ itemSupply.current }}/{{ itemSupply.max }}</span>
    </div>
    <div class="p-1 mr-auto">{{ item.name }}</div>
    <div class="p-1">{{ item.minerals }}</div>
    <div class="p-1">{{ item.gas }}</div>
    <div class="p-1 mr-2">{{ item.buildTime }}</div>
    <div class="btn-group">
      <button
          class="btn btn-primary"
          v-on:click="$emit('copy-item', [item, index])"
      >Add
      </button>
      <button
          class="btn btn-danger"
          v-on:click="$emit('remove-item', index)"
      >Remove
      </button>
    </div>
  </li>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import ListItemInterface from "@/interfaces/ListItemInterface";
import SupplyInterface from "@/interfaces/SupplyInterface";

@Component
export default class ListItem extends Vue {
  @Prop() private items!: ListItemInterface[]
  @Prop() private item!: ListItemInterface
  @Prop() private supply!: SupplyInterface
  @Prop() private index!: number

  isOverCupped = false

  get itemSupply(): SupplyInterface {
    const currentItems = this.$props.items.slice(0, this.index + 1);
    const current = currentItems.reduce((a: number, b: ListItemInterface) => a + (b.supplyCost ? b.supplyCost : 0), this.$props.supply.startSupplyCurrent);
    const max = currentItems.reduce((a: number, b: ListItemInterface) => a + (b.supplyValue ? b.supplyValue : 0), this.$props.supply.startSupplyMax);
    this.isOverCupped = current > max;
    return {
      current: current,
      max: max,
    };
  }
}
</script>

<style scoped lang="scss">

</style>
