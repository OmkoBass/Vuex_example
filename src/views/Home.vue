<template>
  <div>
    <Counter />
    <FakeApi />
  </div>
</template>

<script>
import Counter from "@/components/Counter";
import FakeApi from "@/components/FakeApi";

export default {
  components: {
    Counter,
    FakeApi
  },
  name: 'Home',
}
</script>
