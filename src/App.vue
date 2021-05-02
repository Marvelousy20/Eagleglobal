<template>
  <div id="app">
    <Hero />
    <Reasons />
    <Promise />
    <Products />
    <Testimonials />
    <Question />
    <Footer />
  </div>
</template>

<script>
import Hero from './components/Hero'
import Reasons from './components/Reasons'
import Promise from './components/Promise'
import Products from './components/Products'
import Testimonials from './components/Testimonials'
import Question from './components/Question'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Hero,
    Reasons,
    Promise,
    Products,
    Testimonials,
    Question,
    Footer
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>

