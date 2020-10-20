<template>
  <div class="btn-group shadow">
    <options-item
        v-for="(option, index) in options"
        v-bind:key="option.name"
        v-bind:option="option"
        v-bind:index="index"
    ></options-item>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import OptionsItem from "@/components/Options/OptionsItem.vue";
import OptionsInterface from "@/interfaces/OptionsInterface";

@Component({
  components: {
    OptionsItem,
  }
})
export default class OptionsComponent extends Vue {
  @Prop() private options!: OptionsInterface
}
</script>

<style scoped lang="scss">

</style>
