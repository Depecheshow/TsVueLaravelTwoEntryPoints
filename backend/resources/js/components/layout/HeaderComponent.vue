<template>
    <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
            <b-nav>
                <b-nav-item active to="/">Домой</b-nav-item>
                <b-nav-item to="/tables">Все Таблицы</b-nav-item>
                <b-nav-item to="/about">About</b-nav-item>
            </b-nav>
        </b-navbar-nav>
    </b-navbar>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class HeaderComponent extends Vue {
}
</script>

<style scoped>

</style>
