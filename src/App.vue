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
    Question,
    Footer,
    Testimonials
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Proxima Nova Bold';
    src: local('Proxima Nova Bold'), url('./Fonts/ProximaNova/ProximaNova-Bold.otf');
    font-weight: bold;
  }

  @font-face {
    font-family: 'Proxima Nova Light';
    src: local('Proxima Nova Light'), url('./Fonts/ProximaNova/ProximaNova-Light.otf');
  }

  @font-face {
    font-family: 'Proxima Nova Regular';
    src: local('Proxima Nova Regular'), url('./Fonts/ProximaNova/ProximaNova-Regular.otf');
  }

  @font-face {
    font-family: 'Proxima Nova SemiBold';
    src: local('Proxima Nova SemiBold'), url('./Fonts/ProximaNova/ProximaNova-Semibold.otf');
  }
</style>
