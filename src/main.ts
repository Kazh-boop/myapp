import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const defaultBackgroundColor = "yellow"

export const app = createApp(App)
app.use(router).mount('#app')

app.directive('background-color', (el, binding) => {
    el.style.backgroundColor = binding.arg || defaultBackgroundColor
    //el.innerHTML =  'My background text is :  ' + binding.arg || defaultBackgroundColor
})
