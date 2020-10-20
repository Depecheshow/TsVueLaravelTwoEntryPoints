<template>
    <tr>
        <th scope="row">{{ index }}</th>
        <td>{{ item.table }}</td>
        <td>{{ item.dir }}</td>
        <td>{{ item.generateLink }}</td>
        <td>{{ item.date }}</td>
        <td
            v-on:click="$emit('delete-table', item.id)"
        >
            <button class="btn btn-danger">DEL</button>
        </td>
    </tr>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import {Prop} from 'vue-property-decorator';
import TableItem from "../interfaces/TableItem";

@Component
export default class TableListComponent extends Vue {
    @Prop() index!: number;
    @Prop() item!: TableItem;
}
</script>

<style scoped>

</style>
