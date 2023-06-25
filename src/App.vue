<template>


    <div class="flex flex-col h-screen overflow-hidden">
      <horizontal-bar/>
      <div class="flex-1">
        <!-- Le contenu de votre page ici -->
        <router-view></router-view>
      </div>
      <div>
        <h3>TEST V-SELECT</h3>
      </div>
    </div>



</template>

<script>

import HorizontalBar from "@/ressource/nav/HorizontalBar.vue";
import './assets/tailwind.css'

export default {
  name: 'App',
  components: {
    HorizontalBar
  },

  methods: {
    testClick() {
      console.log("test")
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
</style>
