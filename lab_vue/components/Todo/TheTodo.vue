<script setup lang="ts">
import { useTasksStore } from "~/stores/tasks";

const tasksStore = useTasksStore();
const addTask = (taskName: string) => {
    tasksStore.addTask(taskName);
}

</script>

<template>
    <section class="todo-container">
        <TodoForm @new-task="addTask" />
        <TodoList :tasks="tasksStore.tasks" />
    </section>

</template>

<style>
.todo-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;

    @media screen and (max-width: 436px) {
        flex-direction: column;
        align-items: center;
    }
}
</style>