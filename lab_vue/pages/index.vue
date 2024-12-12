<template>
    <div class="home-container">
        <section>
            <p>Welcome to the TodoList</p>
            <p>In here you can create, remove your tasks</p>
        </section>
        <TodoTheTodo></TodoTheTodo>
    </div>
</template>

<style>
    .home-container{
        display: flex;
        flex-direction: column;
        gap: 50px;

        @media screen and (max-width: 436px){
        padding: 20px;
        align-items: center;
        }
    }
</style>