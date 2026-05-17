<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer-wrapper">
    <p class="name">Griffin Davidson</p>
    <p class="copy">&copy; {{ year }}</p>
    <div class="links">
      <a href="https://github.com/griffindavidson" target="_blank" aria-label="GitHub">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"
          />
        </svg>
      </a>
      <a href="https://forgejo.griffindavidson.com" target="_blank" aria-label="Forgejo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M16.777 0a2.801 2.801 0 1 1 0 5.603 2.801 2.801 0 0 1 0-5.603zm0 1.8a1.001 1.001 0 1 0 0 2.003 1.001 1.001 0 0 0 0-2.003zM7.223 0a2.801 2.801 0 1 1 0 5.603A2.801 2.801 0 0 1 7.223 0zm0 1.8a1.001 1.001 0 1 0 0 2.003A1.001 1.001 0 0 0 7.223 1.8zM12 7.467a2.801 2.801 0 1 1 0 5.603 2.801 2.801 0 0 1 0-5.603zm0 1.8a1.001 1.001 0 1 0 0 2.003 1.001 1.001 0 0 0 0-2.003zm-4.951-.332a.9.9 0 0 1 .898.863l.002.037v2.031a5.159 5.159 0 0 0 3.85 4.574l.201.048v2.077a2.801 2.801 0 1 1-1.8-.06v-1.259a6.96 6.96 0 0 1-4.05-5.857l-.003-.197v-.037l.002-.037V9.835a.9.9 0 0 1 .9-.9zm9.902 0a.9.9 0 0 1 .899.863l.001.037v2.031a6.96 6.96 0 0 1-4.052 6.054v1.259a2.801 2.801 0 1 1-1.8.06v-2.077a5.16 5.16 0 0 0 4.05-4.621l.002-.201V9.835a.9.9 0 0 1 .9-.9zM7.223 18.397a1.001 1.001 0 1 0 0 2.003 1.001 1.001 0 0 0 0-2.003zm9.554 0a1.001 1.001 0 1 0 0 2.003 1.001 1.001 0 0 0 0-2.003z"
          />
        </svg>
      </a>
    </div>
  </footer>
</template>

<style scoped>
.footer-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  padding: 2rem;
  margin-top: 2rem;
}
.name {
  font-weight: 500;
  color: var(--font-primary);
}
.copy {
  font-size: 0.85rem;
  color: var(--font-secondary);
}
.links {
  display: flex;
  gap: 1rem;
  margin-top: 0.25rem;
}
.links a {
  color: var(--font-secondary);
  transition: color 0.2s ease;
  display: flex;
  align-items: center;
}
.links a:hover {
  color: var(--font-primary);
}
</style>
