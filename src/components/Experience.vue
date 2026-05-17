<script setup></script>

<template>
  <div class="experience-wrapper">
    <h2>Education</h2>
    <div class="item">
      <h3>San José State University</h3>
      <p class="date">August 2021 – May 2025</p>
      <p>B.S. Software Engineering</p>
    </div>
    <h2>Experience</h2>
    <div class="item">
      <h3>New Era Technology</h3>
      <p class="date">June 2025 — Present</p>
      <ul>
        <li>Deployed & Installed workstation desktops to new client offices</li>
        <li>Upgraded & Replaced VoIP phone systems in client offices</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.experience-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 2rem auto 2rem;
  padding: 0 2rem;
  max-width: 1225px;
  z-index: 5;
}
.item {
  margin: 1rem 0;
}
h3 {
  margin: 0.25rem 0;
}
.date {
  color: var(--font-secondary);
  font-size: 0.9rem;
  margin: 0;
}
ul {
  padding-left: 2rem;
}
</style>
