<template>
    <div class="todos">
        <h1>Todo List</h1>
        <div class="add-todo">
            <input v-model="newTodoText" placeholder="Ajouter une tâche" />
            <button @click="addTodo">Ajouter</button>
        </div>
        <div class="todo-filter">
            <button @click="showAllTodos">Tous</button>
            <button @click="showActiveTodos">À faire</button>
            <button @click="showCompletedTodos">Terminées</button>
            <button @click="clearCompletedTodos">Supprimer les tâches terminées</button>
        </div>
        <div class="todo-list">
            <todo-component v-for="(todo, index) in filteredTodos" :key="index" :intitule="todo.intitule" :done="todo.done"
                @toggleDone="toggleTodoDone(index)" @deleteTodo="deleteTodo(index)" @editTodo="editTodo" />
        </div>
        <div class="todo-footer">
            <span>{{ remainingTodosCount }} tâche(s) restante(s)</span>

        </div>
    </div>
</template>
  
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TodoComponent from '@/components/TodoComponent.vue';
import TodoImpl from '@/models/Todo'; // classe metier
import Todo from '@/models/Todo';

@Options({
    components: {
        TodoComponent,
    },
})
export default class TodosComponent extends Vue {
    todos: Todo[] = [];
    newTodoText = '';
    filter: 'all' | 'active' | 'completed' = 'all';

    get remainingTodosCount(): number {
        return this.todos.filter((todo) => !todo.done).length;
    }

    get filteredTodos(): Todo[] {
        switch (this.filter) {
            case 'active':
                return this.todos.filter((todo) => !todo.done);
            case 'completed':
                return this.todos.filter((todo) => todo.done);
            default:
                return this.todos;
        }
    }

    addTodo(): void {
        if (this.newTodoText.trim() === '') { // verif input
            return;
        }
        this.todos.push(new TodoImpl(this.newTodoText));
        this.newTodoText = '';
    }

    toggleTodoDone(index: number): void {
        this.todos[index].done = !this.todos[index].done;
    }

    deleteTodo(index: number): void {
        this.todos.splice(index, 1);
    }

    editTodo(): void {
        1 + 1;
    }

    showAllTodos(): void {
        this.filter = 'all';
    }

    showActiveTodos(): void {
        this.filter = 'active';
    }

    showCompletedTodos(): void {
        this.filter = 'completed';
    }

    clearCompletedTodos(): void {
        this.todos = this.todos.filter((todo) => !todo.done);
    }
}
</script>
  
<style scoped>
/* Style pour le composant Todo */
.todos {
    max-width: 600px;
    margin: 0 auto;
}

h1 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
}

.add-todo {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
}

.add-todo input {
    padding: 0.5rem;
    font-size: 1.2rem;
    border: solid;
    border-color: lightgrey;
    border-width: 2px;
    border-radius: 5px;
    flex: 1;
}

.add-todo button {
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    margin-left: 1rem;
    cursor: pointer;
}

.todo-list {
    display: flex;
    flex-direction: column;
}

.todo-list .todo-component {
    margin-bottom: 1rem;
}

.todo-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
}

.todo-footer span {
    font-size: 1.2rem;
}

.todo-filter button {
    background-color: #f44336;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    margin-left: 1rem;
    margin-bottom: 1rem;
    cursor: pointer;
}
</style>
  