<template>
    <div class="todo-form-container">
        <form class="to-do-form" @submit="newTask">
            <input type="text" placeholder="Nombre de la tarea" v-model="task" />
            <button type="submit">Agregar</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const emit = defineEmits(['newTask']);
const task = ref('');

const newTask = (e: SubmitEvent) => {
    e.preventDefault();
    emit('newTask', task.value);
    task.value = '';
}

</script>

<style>
.todo-form-container {
    height: 300px;
    width: 300px;
    padding: 20px;
    background-color: #333;
    border-radius: 20px;
}

.to-do-form {
    display: flex;
    flex-direction: column;
    gap: 10px;

    input {
        padding: 10px;
        border-radius: 10px;
        border: none;
    }

    button {
        padding: 10px;
        border-radius: 10px;
        border: none;
        background-color: #4dffbc;
        cursor: pointer;
    }
}
</style>