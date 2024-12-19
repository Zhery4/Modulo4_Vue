<template>
    <div>
        <span>{{ task.name }}</span>
        <button @click="deleteTask">Eliminar</button>
        <button @click="completeTask">Completar</button>
    </div>
</template>

<script setup lang="ts">
import type { ITask } from '~/types';
import { defineProps } from 'vue';

const props = defineProps<{
    task: ITask;
}>();

const emit = defineEmits(['deleteTask', 'completeTask']);

const deleteTask = () => {
    emit('deleteTask', props.task.id);
}

const completeTask = () => {
    emit('completeTask', props.task.id);
}

</script>

<style>
li {
    background-color: #fff;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
}
</style>