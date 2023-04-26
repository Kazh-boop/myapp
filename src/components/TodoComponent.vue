<template>
    <div class="todo">
      <div class="todo__checkbox-wrapper">
        <input type="checkbox" v-bind:checked="done" class="todo__checkbox" @change="$emit('toggleDone')">
      </div>
      <div class="todo__intitule">{{ intitule }}</div>
    </div>
  </template>
  
  
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        intitule: {
            type: String,
            required: true
        },
        done: {
            type: Boolean,
            default: false
        }
    }
})
export default class TodoComponent extends Vue {
    done!: boolean;
    intitule!: string;
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
</style>