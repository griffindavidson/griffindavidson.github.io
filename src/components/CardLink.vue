<script setup>
defineProps({
  href: {
    type: String,
    required: true,
  },
  target: {
    type: String,
    default: '_self',
  },
})
</script>

<template>
  <a :href="href" :target="target" class="card-link">
    <slot />
  </a>
</template>

<style scoped>
.card-link {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  z-index: 3;
  width: 250px;
  padding: 0.65rem 1rem;
  border-radius: 50rem;
  text-decoration: none;
  background-color: color-mix(in srgb, var(--surface) 30%, transparent);
  color: var(--font-primary);
  border: 1px solid var(--selection);
  transition:
    transform 0.2s ease,
    background-color 0.2s ease;
}

@media (prefers-color-scheme: dark) {
  .card-link {
    background-color: color-mix(in srgb, var(--surface) 50%, transparent);
  }
}

.card-link:hover {
  border: 1px solid var(--selection);
  background-color: var(--surface);
}
</style>
