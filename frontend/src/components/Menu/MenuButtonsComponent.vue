<template>
  <div class="btn-group shadow">
    <MenuButtonComponent
        v-for="tab in menuTabs"
        v-bind:key="tab.name"
        v-bind:current-tab="currentTab"
        v-bind:tab="tab"
        v-on:change-menu-tab="$emit('change-menu-tab', $event)"
    ></MenuButtonComponent>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import MenuButtonComponent from "@/components/Menu/MenuButtonComponent.vue";
import TabInterface from "@/interfaces/TabInterface";

@Component({
  components: {
    MenuButtonComponent
  }
})
export default class MenuButtonsComponent extends Vue {
  @Prop() private currentTab!: TabInterface
  @Prop() private menuTabs!: TabInterface[]
}
</script>

<style scoped lang="scss">

</style>
