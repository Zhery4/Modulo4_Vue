<template>
    <div class="todo-list-container">
        <ul>
            <li v-for="(task, index) in tasks" :key="index">
                <TodoTaskItem :task="task" @delete-task="deleteTask" @complete-task="completeTask" />
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { ITask } from '~/types';

const props = defineProps<{
    tasks: ITask[];
}>();

const deleteTask = (id: number) => {
    const index = props.tasks.findIndex(task => task.id === id);
    props.tasks.splice(index, 1);
}

const completeTask = (id: number) => {
    const index = props.tasks.findIndex(task => task.id === id);
    props.tasks[index].done = !props.tasks[index].done;
    console.log(props.tasks);
}

</script>

<style>
.todo-list-container {
    height: 300px;
    width: 300px;
    background-color: #f0f0f0;
    border-radius: 20px;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    background-color: #fff;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
}
</style>