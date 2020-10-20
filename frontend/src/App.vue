<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import HeaderComponent from '@/components/HeaderComponent.vue';

@Component({
  components: {
    HeaderComponent,
  },
})
export default class App extends Vue {

}
</script>

<style lang="scss">

button:active, button:focus {
  outline: none;
}

button::-moz-focus-inner {
  border: 0;
}

</style>
