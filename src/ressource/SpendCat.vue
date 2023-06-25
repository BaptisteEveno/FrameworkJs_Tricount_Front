<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Les dépenses</h1>

    <!-- Créer une dépense -->
    <div class="flex justify-start mb-4">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="openModal">Ajouter
        une dépense
      </button>
    </div>

    <!-- Liste des dépenses -->
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Tableau des catégories de dépenses</h1>
      <table class="min-w-full">
        <thead>
        <tr>
          <th class="py-2 px-4 bg-gray-200 text-gray-800 font-semibold">Catégorie</th>
          <th class="py-2 px-4 bg-gray-200 text-gray-800 font-semibold">Modifier</th>
          <th class="py-2 px-4 bg-gray-200 text-gray-800 font-semibold">Supprimer</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in spendCat" :key="item.id">
          <td class="py-2 px-4 border">{{ item.title }}</td>
          <td class="py-2 px-4 border">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="editSpend(item.id)">Modifier</button>
          </td>
          <td class="py-2 px-4 border">
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" @click="deleteSpend(item.id)">Supprimer</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>


    <!-- Modal create -->
    <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center z-50">
      <div class="fixed inset-0 bg-gray-900 opacity-50"></div> <!-- Fond grisé -->
      <div class="bg-white rounded shadow-lg w-1/2 relative">
        <div class="p-6">
          <h2 class="text-xl font-bold mb-4">Ajouter une catégorie de dépense</h2>
          <form>
            <div class="flex mb-4">
              <label class="w-1/4 text-gray-700 font-bold" for="spendDate">Nom:</label>
              <input v-model="title"
                     class="w-3/4 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="title" type="text">
            </div>
            <div class="flex justify-end">
              <button @click="closeModal"
                      class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">
                Annuler
              </button>
              <button @click="ajouterCategorie"
                      class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Valider
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Modal UPDATE -->

    <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center z-50">
      <div class="fixed inset-0 bg-gray-900 opacity-50"></div> <!-- Fond grisé -->
      <div class="bg-white rounded shadow-lg w-1/2 relative">
        <div class="p-6">
          <h2 class="text-xl font-bold mb-4">Ajouter une catégorie de dépense</h2>
          <form>
            <div class="flex mb-4">
              <label class="w-1/4 text-gray-700 font-bold" for="spendDate">Nom:</label>
              <input v-model="title"
                     class="w-3/4 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="title" type="text">
            </div>
            <div class="flex justify-end">
              <button @click="closeModal"
                      class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">
                Annuler
              </button>
              <button @click="ajouterCategorie"
                      class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Valider
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- Modal Delete -->
    <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center z-50">
      <div class="fixed inset-0 bg-gray-900 opacity-50"></div> <!-- Fond grisé -->
      <div class="bg-white rounded shadow-lg w-1/2 relative">
        <div class="p-6">
          <h2 class="text-xl font-bold mb-4">Ajouter une catégorie de dépense</h2>
          <form>
            <div class="flex mb-4">
              <label class="w-1/4 text-gray-700 font-bold" for="spendDate">Nom:</label>
              <input v-model="title"
                     class="w-3/4 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="title" type="text">
            </div>
            <div class="flex justify-end">
              <button @click="closeModal"
                      class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">
                Annuler
              </button>
              <button @click="ajouterCategorie"
                      class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Valider
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>


  </div>
</template>


<script>
import vSelect from "vue-select";

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: {vSelect},
  name: "spend-cat",
  created() {
    this.getSpendCat()

  },
  data() {
    return {
      title: null,
      users: [],
      formData: {
        amount: null,
        category: null,
        recipient: null,
        spendDate: null,
        userPay: null
      },
      spend: [],
      spendCat: [],
      isModalOpen: false,
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    async submitData() {
      try {
        const url = 'http://127.0.0.1:3001/spend-cat';
        const data = {
          title : "Mangerrrrrrrrrr"
        }

        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });

        if (!response.ok) {
          throw new Error('La requête a échoué avec le code : ' + response.status);
        }

        const responseData = await response.json();
        console.log(responseData);
        this.closeModal()
        // Effectuer des actions après la réussite de la requête POST
      } catch (error) {
        console.error(error);
        // Gérer les erreurs de la requête
      }
    },
    async submitSpendCat2() {
      try {
        console.log('TEST')
        let test = {
          "title" : "Mangerrrr"
        }
        let data = {
          title : this.title
        }
        console.log(data)
        const response = await this.$axios.post('http://127.0.0.1:3001/spend-cat', test);
        console.log(response.data);
        // Effectuer des actions après la création réussie
      } catch (error) {
        console.error(error);
        // Gérer les erreurs de la requête
      }

    },
    ajouterCategorie() {

      // Envoyer une requête POST pour ajouter une catégorie
      // Assurez-vous d'ajuster l'URL et les données selon votre API
      fetch('127.0.0.1:3001/spend-cat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nom: 'JE TESTE' })
      })
          .then(response => response.json())
          .then(data => {
            console.log(data)
            this.closeModal()

          })
          .catch(error => {
            console.error('Erreur lors de l\'ajout de la catégorie:', error);
          });
    },

    /*Liste des catégories de dépense*/
    async getSpendCat() {
      try {
        const response = await this.$axios.get('http://127.0.0.1:3001/spend-cat');
        // Traiter la réponse
        this.spendCat = response.data
        console.log('CatSpend', response.data);
      } catch (error) {
        // Gérer les erreurs
        console.error(error);
      }
    },


  },

}
</script>

<style scoped>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
</style>