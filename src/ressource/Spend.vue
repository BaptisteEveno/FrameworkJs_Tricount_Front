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
      <h1 class="text-2xl font-bold mb-4">Tableau des dépenses</h1>
      <table class="min-w-full">
        <thead>
        <tr>
          <th class="py-2 px-4 bg-gray-200 text-gray-800 font-semibold">Amount</th>
          <th class="py-2 px-4 bg-gray-200 text-gray-800 font-semibold">Category</th>
          <th class="py-2 px-4 bg-gray-200 text-gray-800 font-semibold">Recipient</th>
          <th class="py-2 px-4 bg-gray-200 text-gray-800 font-semibold">Spend Date</th>
          <th class="py-2 px-4 bg-gray-200 text-gray-800 font-semibold">User Pay</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in spend" :key="item.id">
          <td class="py-2 px-4 border">{{ item.amount }} €</td>
          <td class="py-2 px-4 border">{{ item.category }}</td>
          <td class="py-2 px-4 border">{{ item.recipient }}</td>
          <td class="py-2 px-4 border">{{ item.spendDate }}</td>
          <td class="py-2 px-4 border">{{ item.userPay }}</td>
        </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal -->
    <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center z-50">
      <div class="fixed inset-0 bg-gray-900 opacity-50"></div> <!-- Fond grisé -->
      <div class="bg-white rounded shadow-lg w-1/2 relative">
        <div class="p-6">
          <h2 class="text-xl font-bold mb-4">Ajouter une dépense</h2>
          <form>
            <div class="flex mb-4">
              <label class="w-1/4 text-gray-700 font-bold" for="userPay">Payer par:</label>
              <v-select :options="users"
                        :reduce="(s) => s.id"
                        v-model="formData.userPay"
                        label="firstName"
                        class="w-3/4 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></v-select>
            </div>
            <div class="flex mb-4">
              <label class="w-1/4 text-gray-700 font-bold" for="recipient">Pour :</label>
              <v-select :options="users"
                        :reduce="(s) => s.id"
                        v-model="formData.recipient"
                        label="firstName"
                        class="w-3/4 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></v-select>
            </div>
            <div class="flex mb-4">
              <label class="w-1/4 text-gray-700 font-bold" for="spendDate">Date dépense :</label>
              <input v-model="formData.spendDate"
                     class="w-3/4 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="spendDate" type="text">
            </div>
            <div class="flex mb-4">
              <label class="w-1/4 text-gray-700 font-bold" for="category">Catégorie :</label>
              <v-select :options="spendCat"
                        :reduce="(s) => s.id"
                        v-model="formData.category"
                        label="title"
                        class="w-3/4 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></v-select>
            </div>
            <div class="flex mb-4">
              <label class="w-1/4 text-gray-700 font-bold" for="amount">Montant :</label>
              <input v-model="formData.amount"
                     class="w-3/4 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="amount" type="number">
            </div>
            <div class="flex justify-end">
              <button @click="closeModal"
                      class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">
                Annuler
              </button>
              <button @click="submitSpend"
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
  name: "spend-page",
  created() {
    this.getSpend()
    this.getUsers()
    this.getSpendCat()

  },
  data() {
    return {
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
    async submitSpend() {
      try {
        console.log('TEST')
        console.log(this.formData)
        const response = await this.$axios.post('http://127.0.0.1:3001/spend', this.formData);
        console.log(response.data);
        // Effectuer des actions après la création réussie
      } catch (error) {
        console.error(error);
        // Gérer les erreurs de la requête
      }

    },
    /*Liste des dépenses*/
    async getSpend() {
      try {
        const response = await this.$axios.get('http://127.0.0.1:3001/spend');
        // Traiter la réponse
        this.spend = response.data
        console.log(response.data);
      } catch (error) {
        // Gérer les erreurs
        console.error(error);
      }
    },

    /*Liste des personnes dans la colocation*/
    async getUsers() {
      try {
        const response = await this.$axios.get('http://127.0.0.1:3001/users');
        // Traiter la réponse
        this.users = response.data
        console.log(response.data);
      } catch (error) {
        // Gérer les erreurs
        console.error(error);
      }
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