<template>
  <div>
    <h1>
      {{ count }}
    </h1>

    <h2> {{ getEven ? 'Even' : 'Odd' }}</h2>

    <div style="display: flex; flex-direction: row; justify-content: center">
      <vs-button default @click="increment">
        Increment
      </vs-button>

      <vs-button default @click="decrement">
        Decrement
      </vs-button>
    </div>

    <div v-if="loading">
      LOADING...
    </div>
    <div v-else-if="error">
      ERROR
    </div>
    <div v-else>
      <div
          v-for="user in getUsers" :key="user.id"
          style="display: flex; flex-direction: column; justify-content: center; align-items: center;"
      >
        <h3> {{ user.name }} </h3>
        <vs-button
            danger
            @click="removeUser(user.id)"
        >
          Delete
        </vs-button>
      </div>
    </div>

  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from "vuex";

  export default {
    async mounted() {
      try {
        await this.$store.dispatch('getUsers')
      } catch(err) {
        console.log(err);
        this.error = true;
      } finally {
        this.loading = false;
      }
    },
    data: () => {
      return {
        loading: true,
        error: false
      }
    },
    name: 'Counter',
    computed: {
      ...mapState(['count', 'usersLoading', 'usersError']),
      ...mapGetters(['getEven', 'getUsers'])
    },
    methods: {
      ...mapActions([
          'increment',
          'decrement',
          'removeUser'
      ])
    }
  }
</script>

<style scoped>

</style>
