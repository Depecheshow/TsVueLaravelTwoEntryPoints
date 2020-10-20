<template>
  <div class="d-flex flex-column">
    <div
        class="alert alert-danger alert-dismissible m-0"
        v-for="(alert, index) in alerts"
        v-bind:key="index"
    >{{ alert }}
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class AlertsComponent extends Vue {
  @Prop() private alerts!: string[]
}
</script>

<style scoped lang="scss">

</style>
