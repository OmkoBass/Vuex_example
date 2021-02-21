<template>
  <div>
    <transition name="change">
      <h1>
        {{ count }}
      </h1>
    </transition>

    <transition name="change">
      <h2> {{ getEven ? 'Even' : 'Odd' }}</h2>
    </transition>

    <div style="display: flex; flex-direction: row; justify-content: center">
      <vs-button default @click="increment">
        Increment
      </vs-button>

      <vs-button default @click="decrement">
        Decrement
      </vs-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: 'Counter',
  computed: {
    ...mapState(['count']),
    ...mapGetters(['getEven'])
  },
  methods: {
    ...mapActions([
      'increment',
      'decrement',
    ])
  },
}
</script>

<style scoped>

</style>
