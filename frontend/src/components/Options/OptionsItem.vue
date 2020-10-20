<template>
  <label
      :for="labelId"
      class="btn m-0"
      v-bind:class="classObject"
  >
    {{ option.name }}
    <input
        :id="labelId"
        type="checkbox"
        v-model="option.state"
        v-show="false"
    >
  </label>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import ClassObjectInterface from "@/interfaces/ClassObjectInterface";

@Component
export default class OptionsItem extends Vue {
  @Prop() private option!: {
    name: string;
    state: boolean;
  };
  @Prop() private index!: number|string;

  private labelId = 'option-' + this.$props.index;

  get classObject(): ClassObjectInterface {
    return {
      'btn-success': this.$props.option.state,
      'btn-dark': !this.$props.option.state,
    };
  }
}
</script>

<style scoped lang="scss">

</style>
