<template>
  <div>
    <!--
      text-3xl : Définit la taille du texte sur un format "extra large" (3xl).
      font-bold : Applique une épaisseur de police en gras.
      text-center : Centre le texte horizontalement.
      text-gray-800 : Définit la couleur du texte sur une teinte de gris foncé (#2d3748)
.   -->
    <h2 class="text-3xl font-bold text-center text-gray-800 mt-4">Exemple utilisation TailWind</h2>

    <h5 class="subtitle">1- FlexBox</h5>
    <div class="flex flex-row">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">Button 1</button>
      <button class="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded">Button 2</button>
      <button class="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded">Button 3</button>
    </div>



  </div>

</template>

<script>
export default {
  name: "tail-wind"
}
</script>

<style scoped>
.subtitle {
  @apply text-xl font-semibold text-left text-gray-700 mt-5 ml-5;
}

</style>