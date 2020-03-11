<template>
  <section>
    <div class="container">
      <div>
        <logo />
        <h1 class="title">
          test-nuxt
        </h1>
        <h2 class="subtitle">
          {{titles.pageTitleText.length > 0 ? titles.pageTitleText : ''}}
        </h2>
        <a class="mb-4 d-block" :href="links.link">Переход</a>
        <div class="counters d-flex align-items-center justify-content-between p-4 border rounded">
          <button class="counter" v-on:click="increase($event,5)">Прибавить</button>
          <p>{{counter}}</p>
          <button class="counter" v-on:click="decrease($event,5)">Убавить</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import Navbar from '~/components/Navbar.vue'

  export default {
    components: {
      Logo,
      Navbar
    },
    data() {
      return {
        titles: {
          pageTitleText: 'Привет, Вью'
        },
        links: {
          link: 'https://github.com'
        },
        counter: 0
      }
    },
    methods: {
      increase: function (evt, n) {
        console.log(evt.target);

        this.counter += n;
      },
      decrease: function (n) {
        console.log(evt.target);

        this.counter -= n;
      }
    }
  }

</script>

<style>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }

  .counter {
    color: red;
    box-shadow: 0 0 0 10px rgba(0,0,0, 0,5)
  }

</style>
