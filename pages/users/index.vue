<template>
  <section>
    <ul class="list-group">
      <li v-if="testing" class="list-group-item">{{ testing }}</li>
      <li class="list-group-item">Dapibus ac facilisis in</li>
      <li class="list-group-item">Morbi leo risus</li>
      <li class="list-group-item">Porta ac consectetur ac</li>
      <li class="list-group-item">Vestibulum at eros</li>
      <button @click="changeMyStoreState()">click</button>
    </ul>
  </section>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return {
      users: [
      ]
    }
  },
  methods: {
    changeMyStoreState: function () {
      this.$store.commit('CHANGE_TESTING', 50);
      console.log('Hello ' + this.testing);

    }
  },
  computed: {
    testing: vm => vm.$store.state.testing
  }
}
</script>