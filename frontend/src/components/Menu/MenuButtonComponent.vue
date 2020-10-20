<template>
  <button
      v-bind:class="['btn', 'btn-secondary', { active: currentTab.name === tab.name }]"
      v-on:click="$emit('change-menu-tab', tab)"
  >
    {{ tab.name }}
  </button>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import TabInterface from "@/interfaces/TabInterface";

@Component
export default class MenuButtonComponent extends Vue {
  @Prop() private currentTab!: TabInterface;
  @Prop() private tab!: TabInterface;
}
</script>

<style scoped lang="scss">

</style>
