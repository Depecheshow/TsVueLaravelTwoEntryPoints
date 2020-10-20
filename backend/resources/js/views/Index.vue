<template>
    <div>
        <div class="d-flex flex-row">
            <b-button
                v-on:click="newTable"
                class="btn btn-primary btn-ghost btn-main"
            >
                Создать новую таблицу
            </b-button>
            <b-link
                to="/tables"
                class="btn btn-primary btn-ghost btn-main"
            >
                Просмотреть созданные таблицы
            </b-link>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import router from '../router';
import axios from 'axios';

@Component
export default class IndexPage extends Vue {
    name: string = 'IndexPage';

    async newTable() {
        const res = await axios.put('https://jsonplaceholder.typicode.com/posts/1',);
        console.log(res);
        router.push('/tables');
    }
}
</script>

<style scoped>

</style>
