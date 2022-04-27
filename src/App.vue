<template>
<div class="container">
  <Header />
  <Events />

</div>
</template>

<script>
import Header from './components/Header'
import Events from './components/Events'


export default {
  name: 'App',
  components: {
    Header,
    Events
  }
}
</script>

<style>

</style>
