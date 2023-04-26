<template>
  <div class="home">
    <Todos></Todos>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Todos from '@/components/Todos.vue'


@Options({
  components: {
    Todos
  },
  props: {
    msg: String
  }
})
export default class Home extends Vue {

  msg = "coucou";
  visible = true;
  foo(){
    this.visible = !this.visible;
  }
}

</script>
