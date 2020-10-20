<template>
  <div class="container-full d-flex justify-content-between mb-5">
    <MenuButtonsComponent
        v-bind:current-tab="currentTab"
        v-bind:menu-tabs="menuTabs"
        v-on:change-menu-tab="$emit('change-menu-tab', $event)"
    ></MenuButtonsComponent>
    <options-component
        v-bind:options.sync="options"
    ></options-component>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import MenuButtonsComponent from "@/components/Menu/MenuButtonsComponent.vue";
import OptionsComponent from "@/components/Options/OptionsComponent.vue";
import TabInterface from "@/interfaces/TabInterface";
import OptionsInterface from "@/interfaces/OptionsInterface";

@Component({
  components: {
    MenuButtonsComponent,
    OptionsComponent
  }
})
export default class MenuComponent extends Vue {
  @Prop() private currentTab!: TabInterface
  @Prop() private menuTabs!: TabInterface[]
  @Prop() private options!: OptionsInterface
}
</script>

<style scoped lang="scss">

</style>
