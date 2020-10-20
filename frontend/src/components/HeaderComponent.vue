<template>
  <div id="nav" class="navbar navbar-dark bg-dark container-full">r
    <b-link to="/" class="navbar-brand">SC2 BUILD ORDER CALCULATOR</b-link>
    <ul class="navbar-nav ml-auto d-flex flex-row flex">
      <li class="nav-item ml-2">
        <b-link class="nav-link" to="/">Home</b-link>
      </li>
      <li class="nav-item ml-2">
        <b-link class="nav-link" to="/about">About</b-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class HeaderComponent extends Vue {
}
</script>

<style scoped>

</style>
