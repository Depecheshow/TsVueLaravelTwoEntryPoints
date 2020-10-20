<template>
  <div>
    <h1 class="mt-3">Build Order</h1>
    <div class="d-flex">
      <div class="m-2">Minerals: {{ minerals }}</div>
      <div class="m-2">Gas: {{ gas }}</div>
      <div class="m-2">Time: {{ time }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class BuildInfoComponent extends Vue {
  @Prop() private minerals!: number
  @Prop() private gas!: number
  @Prop() private time!: string

}
</script>

<style scoped>

</style>
