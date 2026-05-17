<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import CardLink from './CardLink.vue'

let rafId
let resizeHandler
let orientationHandler

// Persist bubble state across HMR reloads
const globalKey = '__heroBubbleState__'

if (!window[globalKey]) {
  window[globalKey] = {
    initialized: false,
    states: [],
  }
}

const bubbleStore = window[globalKey]

onMounted(() => {
  const bubbles = Array.from(document.querySelectorAll('.bubble'))

  // Compute bubble size based on screen width
  const baseRadius = Math.max(window.innerWidth, window.innerHeight)

  if (!bubbleStore.initialized) {
    bubbleStore.states = bubbles.map(() => {
      const sizeFactor = 0.325 + Math.random() * 0.325
      const bubbleRadius = baseRadius * sizeFactor

      return {
        x: Math.random() * (window.innerWidth - bubbleRadius),
        y: Math.random() * (window.innerHeight - bubbleRadius),
        angle: Math.random() * Math.PI * 2,
        speed: 0.3 + Math.random() * 0.5,

        radius: bubbleRadius,
        sizeFactor,

        element: null,
      }
    })

    bubbleStore.initialized = true
  }

  const bubbleStates = bubbleStore.states

  // Assign DOM element & initial size
  bubbleStates.forEach((state, i) => {
    const el = bubbles[i]

    state.element = el

    el.style.width = `${state.radius}px`
    el.style.height = `${state.radius}px`

    // Immediately restore saved position
    el.style.transform = `translate3d(${state.x}px, ${state.y}px, 0)`
  })

  // Animate function with edge bouncing
  function animate() {
    bubbleStates.forEach((state) => {
      state.x += Math.cos(state.angle) * state.speed
      state.y += Math.sin(state.angle) * state.speed

      const { radius } = state

      // Bounce off horizontal edges
      if (state.x <= 0 || state.x + radius >= window.innerWidth) {
        state.angle = Math.PI - state.angle
      }
      // Bounce off vertical edges
      if (state.y <= 0 || state.y + radius >= window.innerHeight) {
        state.angle = -state.angle
      }

      state.element.style.transform = `translate3d(${state.x}px, ${state.y}px, 0)`
    })

    rafId = requestAnimationFrame(animate)
  }

  animate()

  function updateBubblesOnResize() {
    const baseRadius = Math.max(window.innerWidth, window.innerHeight)

    bubbleStates.forEach((state) => {
      state.radius = baseRadius * state.sizeFactor

      // Keep bubbles inside screen bounds
      state.x = Math.max(0, Math.min(state.x, window.innerWidth - state.radius))
      state.y = Math.max(0, Math.min(state.y, window.innerHeight - state.radius))

      state.element.style.width = `${state.radius}px`
      state.element.style.height = `${state.radius}px`
    })
  }

  resizeHandler = updateBubblesOnResize
  orientationHandler = updateBubblesOnResize

  window.addEventListener('resize', resizeHandler)
  window.addEventListener('orientationchange', orientationHandler)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(rafId)
  window.removeEventListener('resize', resizeHandler)
  window.removeEventListener('orientationchange', orientationHandler)
})
</script>

<template>
  <main class="hero">
    <div class="grid" />
    <div class="hero-content">
      <div class="hero-top">
        <div class="hero-text">
          <h1>Hey, I'm Griffin.</h1>
          <p>
            I build websites, self-hosted services, and Linux-powered projects from my homelab in
            California.
          </p>
        </div>
        <img src="/src/images/portrait.jpeg" />
      </div>
      <div class="hero-links">
        <CardLink href="/">Blog (coming soon)</CardLink>
        <CardLink href="https://www.linkedin.com/in/griffin-davidson-341397228/" target="_blank">
          LinkedIn
        </CardLink>
        <CardLink href="https://forgejo.griffindavidson.com" target="_blank">Forgejo</CardLink>
        <CardLink href="https://github.com/griffindavidson" target="_blank">GitHub</CardLink>
      </div>
    </div>
    <div class="bubbles-layer">
      <div class="bubbles">
        <div class="bubble one" />
        <div class="bubble two" />
        <div class="bubble three" />
      </div>
    </div>
  </main>
</template>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  min-height: 80svh;
  overflow-y: visible;
  overflow-x: clip;
}
.grid {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background: url('/src/images/grid-light.svg'), var(--hero-background);
  background-repeat: repeat;
  background-size: 25px;
  animation: scroll-background 30s linear infinite;
}
@media (prefers-color-scheme: dark) {
  .grid {
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    background: url('/src/images/grid-dark.svg'), var(--hero-background);
    background-repeat: repeat;
    background-size: 25px;
    animation: scroll-background 30s linear infinite;
  }
}
.grid::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 255, 255, 0) 0%,
    var(--hero-background) 100%
  );
}
@keyframes scroll-background {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 0 -300px;
  }
}
.hero-content {
  position: relative;
  z-index: 2;
  min-height: 80svh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
}
.hero-content img {
  width: clamp(175px, 35%, 250px);
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  object-fit: cover;
}
.hero-top {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}
.hero-text {
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 30ch;
}
.hero-text > p {
  color: var(--font-secondary);
}

.hero-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  max-width: 1225px;
}

.bubbles-layer {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  overflow-y: visible;
  overflow-x: clip;
}
.bubbles {
  position: absolute;
  inset: 0;
  pointer-events: none;
  isolation: isolate;
}
.bubble {
  position: absolute;
  width: 300px;
  height: 300px;
  top: 0;
  left: 0;
  z-index: 2;
  border-radius: 50%;
  filter: blur(50px);
  opacity: 0.6;
  will-change: transform;
  pointer-events: none;
  mix-blend-mode: var(--bubble-blend);
  isolation: isolate;
  transform: translate3d(0, 0, 0);
}
.one {
  background-color: var(--bubble-one);
}
.two {
  background-color: var(--bubble-two);
}
.three {
  background-color: var(--bubble-three);
}
</style>
