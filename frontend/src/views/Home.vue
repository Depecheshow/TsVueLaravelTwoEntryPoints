<template>
  <div class="container mt-5">
    <MenuComponent
        v-bind:options.sync="options"
        v-bind:current-tab="currentTab"
        v-bind:menu-tabs="menuTabs"
        v-on:change-menu-tab="currentTab = $event"
    ></MenuComponent>
    <component
        v-bind:is="currentTab.component"
        v-on:add-item="addItem"
        class="list-group"
    ></component>
    <build-info-component
        v-bind:minerals="minerals"
        v-bind:gas="gas"
        v-bind:time="time"
    ></build-info-component>
    <alerts-component
        v-bind:alerts="alerts"
    ></alerts-component>
    <list-component>
      <draggable v-model="listItems" @start="drag=true" @end="drag=false">
        <list-item
            v-for="(item, index) in listItems"
            v-bind:key="index"
            v-bind:index="index"
            v-bind:item="item"
            v-bind:items="listItems"
            v-bind:supply="supply"
            v-on:remove-item="removeItem"
            v-on:copy-item="copyItem"
        ></list-item>
      </draggable>
    </list-component>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import MenuComponent from "@/components/Menu/MenuComponent.vue";
import TabUnits from "@/components/TabComponents/TabUnits.vue";
import TabBuildings from "@/components/TabComponents/TabBuildings.vue";
import BuildInfoComponent from "@/components/BuildInfoComponent.vue";
import AlertsComponent from "@/components/Alerts/AlertsComponent.vue";
import draggable from 'vuedraggable';
import ListComponent from "@/components/List/ListComponent.vue";
import ListItem from "@/components/List/ListItem.vue";

import moment from "moment";
import TabInterface from "@/interfaces/TabInterface";
import ListItemInterface from "@/interfaces/ListItemInterface";
import OptionsInterface from "@/interfaces/OptionsInterface";
import ImagesInterface from "@/interfaces/ImagesInterface";

@Component({
  components: {
    MenuComponent,
    TabUnits,
    TabBuildings,
    BuildInfoComponent,
    AlertsComponent,
    draggable,
    ListComponent,
    ListItem,
  }
})
export default class Home extends Vue {
  images: ImagesInterface[] = [
    {
      name: 'minerals',
      path: 'images/minerals.png',
    }
  ]
  drag = false
  options: OptionsInterface = {
    supplyCheck: {
      name: 'Supply Alert',
      state: false,
    },
  }
  alerts: string[] = []
  menuTabs: TabInterface[] = [
    {
      name: 'Units',
      component: TabUnits,
    },
    {
      name: 'Buildings',
      component: TabBuildings,
    },
  ]
  listItems: ListItemInterface[] = []
  startSupplyCurrent = 12
  startSupplyMax = 15
  supplyLimit = 200
  currentTab: TabInterface = this.menuTabs[0]

  get supply(): {
    startSupplyCurrent: number;
    startSupplyMax: number;
    supplyLimit: number
    current: number;
    max: number;
  } {
    return {
      startSupplyCurrent: this.startSupplyCurrent,
      startSupplyMax: this.startSupplyMax,
      supplyLimit: this.supplyLimit,
      current: this.listItems.reduce((a: number, b: ListItemInterface) => a + (b.supplyCost ? b.supplyCost : 0), this.startSupplyCurrent),
      max: this.listItems.reduce((a: number, b: ListItemInterface) => a + (b.supplyValue ? b.supplyValue : 0), this.startSupplyMax),
    };
  }

  get time(): string {
    const m = moment.duration(this.listItems.reduce((a, b) => a + b.buildTime, 0), 'seconds');
    return m.get('minute') + ':' + m.get('second');
  }

  get minerals(): number {
    return this.listItems.reduce((a: number, b: ListItemInterface) => a + b.minerals, 0);
  }

  get gas(): number {
    return this.listItems.reduce((a, b) => a + b.gas, 0);
  }

  addItem([item, index]: [ListItemInterface, number]): void {
    if (this.options.supplyCheck.state && !!item.supplyCost && this.supply.current >= this.supply.max) {
      this.alerts.push('Additional supply depots required');
      setTimeout(() => {
        this.alerts.splice(index, 1);
      }, 2000);
    } else {
      this.listItems.push(item);
    }
  }

  copyItem([item, index]: [ListItemInterface, number]): void {
    if (this.options.supplyCheck.state && !!item.supplyCost && this.supply.current >= this.supply.max) {
      this.alerts.push('Additional supply depots required');
      setTimeout(() => {
        this.alerts.splice(index, 1);
      }, 2000);
    } else {
      this.listItems.splice(index, 0, item);
    }
  }

  removeItem(index: number): void {
    this.listItems.splice(index, 1);
  }
}
</script>
