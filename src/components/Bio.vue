<script setup></script>

<template>
  <div class="bio-wrapper">
    <h2>About me</h2>
    <p>
      I enjoy building modern web applications, experimenting with Linux servers, and running
      self-hosted services from my homelab. Lately I’ve been focused on frontend development,
      networking, and creating reliable infrastructure for personal projects.
    </p>
  </div>
</template>

<style scoped>
.bio-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 2rem;
  z-index: 5;
  max-width: 1225px;
  display: flex;
}
p {
  color: var(--font-secondary);
  margin: 1rem 0 0;
}
</style>
