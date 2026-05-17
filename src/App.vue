<script setup>
import Hero from './components/Hero.vue'
import Bio from './components/Bio.vue'
import Experience from './components/Experience.vue'
import Programming from './components/Programming.vue'
import Homelab from './components/Homelab.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Hero />
  <Bio />
  <Experience />
  <Programming />
  <Homelab />
  <Footer />
</template>

<style>
@font-face {
  font-family: 'Outfit';
  src: url('/fonts/Outfit-VariableFont_wght.ttf');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}
*::before,
*::after,
* {
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
  font-family: Outfit, sans-serif;
}
body {
  background-color: var(--hero-background);
}
:root {
  --hero-background: #f0f0f0;
  --bubble-one: #ff8624;
  --bubble-two: #ffc922;
  --bubble-three: #e61991;
  --font-primary: #000;
  --font-secondary: #333;
  --surface: #fafafa;
  --selection: #bbb;
  --bubble-blend: multiply;
  --shadow: rgba(0, 0, 0, 0.08);
  --shadow-hover: rgba(0, 0, 0, 0.12);
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
li {
  color: var(--font-primary);
}

@media (prefers-color-scheme: dark) {
  :root {
    --hero-background: #222;
    --bubble-one: #4949bb;
    --bubble-two: #49aa49;
    --bubble-three: #a855f7;
    --font-primary: #fff;
    --font-secondary: #ddd;
    --surface: #383838;
    --selection: #444;
    --bubble-blend: color-burn;
    --shadow: rgba(0, 0, 0, 0.35);
    --shadow-hover: rgba(0, 0, 0, 0.5);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    color: var(--font-primary);
  }
}
</style>
