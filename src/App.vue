<template>
  <div id="app">
    <Hero/>
    <Projects/>
    <Technologies/>
    <Timeline/>
    <Blog/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
import Hero from './components/Hero.vue'
import Projects from './components/Projects.vue'
import Technologies from './components/Technologies.vue'
import Timeline from './components/Timeline.vue'
import Blog from './components/Blog.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: { Hero, Projects, Technologies, Timeline, Blog, Contact, Footer }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*::selection{
  background: #baffea;
  color: #111215;
}

::-webkit-scrollbar{
  width: 3px;
  background: var(--primary);
}

::-webkit-scrollbar-thumb{
  background-color: var(--bg);
}

:root {  }

@font-face{
    font-family: 'ubuntu-mono';
    src: url('fonts/ubuntu-mono.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

body{
  display: flex;
  justify-content: center;
  
  font-family: "ubuntu-mono", monospace;
  background-color: #1a1a1e;
}
</style>