<template>
  <ul class="list-group shadow mt-3 mb-3">
    <slot></slot>
  </ul>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class ListComponent extends Vue {
}
</script>

<style scoped lang="scss">

</style>
