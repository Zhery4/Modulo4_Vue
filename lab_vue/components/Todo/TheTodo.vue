<script setup lang="ts">
</script>

<template>
    <section class="todo-container">
        <TodoForm/>
        <TodoList/>
    </section>

</template>

<style>
    .todo-container{
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 20px;

        @media screen and (max-width: 436px){
            flex-direction: column;
            align-items: center;    
        }
    }
</style>