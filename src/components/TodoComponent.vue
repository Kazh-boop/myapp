<template>
    <div class="todo">
        <div class="todo__checkbox-wrapper">
            <input type="checkbox" v-bind:checked="done" class="todo__checkbox" @change="$emit('toggleDone')">
        </div>
        <div class="todo__intitule">{{ intitule }}</div>
        <button class="todo__delete-button" @click="$emit('deleteTodo', todo)">Supprimer</button>
    </div>
</template>
  
  
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TodoImpl from '@/models/Todo'; // classe metier

@Options({
    props: {
        todo: {
            type: TodoImpl,
            required: true,
        },
    }
})
export default class TodoComponent extends Vue {
    todo!: TodoImpl;

    get intitule(): string {
        return this.todo.intitule;
    }

    get done(): boolean {
        return this.todo.done;
    }
}
</script>

<style scoped>
.todo {
    display: flex;
    align-items: center;
}

.todo__checkbox-wrapper {
    margin-right: 10px;
}

.todo__intitule {
    flex: 1;
    font-size: 1.5rem;
}

.todo__delete-button {
    background: transparent;
    border: none;
    color: red;
    cursor: pointer;
    font-size: 0.8rem;
    margin-left: 8px;
    padding: 0;
}
</style>