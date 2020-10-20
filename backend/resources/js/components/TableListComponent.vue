<template>
    <table class="table table-hover">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Таблица</th>
            <th scope="col">Папка</th>
            <th scope="col">Генератор</th>
            <th scope="col">Дата</th>
        </tr>
        </thead>
        <tbody>
        <table-item-component
            v-for="(item, index) in items"
            v-bind:key="index"
            v-bind:index="index"
            v-bind:item="item"
            v-on:delete-table="deleteRow($event)"
        ></table-item-component>
        </tbody>
    </table>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import TableItem from "../interfaces/TableItem";
import TableItemComponent from "./TableItemComponent.vue";
import axios from 'axios';

@Component({
    components: {
        TableItemComponent,
    }
})
export default class TableListComponent extends Vue {
    items: TableItem[] = [];

    mounted() {
        this.items = [
            {
                id: 1,
                table: 'Name1',
                dir: 'Dir1',
                generateLink: 'Link1',
                date: 'date'
            },
            {
                id: 2,
                table: 'Name2',
                dir: 'Dir2',
                generateLink: 'Link2',
                date: 'date'
            },
            {
                id: 3,
                table: 'Name3',
                dir: 'Dir3',
                generateLink: 'Link3',
                date: 'date'
            },
            {
                id: 4,
                table: 'Name4',
                dir: 'Dir4',
                generateLink: 'Link4',
                date: 'date'
            },
            {
                id: 5,
                table: 'Name5',
                dir: 'Dir5',
                generateLink: 'Link5',
                date: 'date'
            },
        ];
    }

    async deleteRow(id: number) {
        const res = await axios.delete('https://jsonplaceholder.typicode.com/posts/' + id,);
        console.log(res);
        this.items = this.items.filter(item => item.id !== id);
    }

    constructor() {
        super();
        axios.get('/api/posts').then((res) => {
            console.log(res);
        });
    }
}
</script>

<style scoped>

</style>
