<template>
  <div v-if="loading">
    LOADING...
  </div>
  <div v-else-if="error">
    ERROR
  </div>
  <div v-else>
    <transition-group name="list">
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
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'FakeApi',
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
  computed: {
    ...mapGetters(['getUsers'])
  },
  methods: {
    ...mapActions(['removeUser'])
  }
}
</script>

<style scoped>
.list-enter-active, .list-leave-active {
  transition: all 0.3s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
