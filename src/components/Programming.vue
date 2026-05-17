<script setup></script>

<template>
  <div class="project-wrapper">
    <h2>Programming</h2>
    <h3>Skills</h3>
    <div class="skill-grid-wrapper">
      <div class="skill-wrapper">
        <h4>Languages</h4>
        <p>HTML/CSS/JS</p>
        <p>Python</p>
        <p>Java</p>
        <p>C++</p>
        <p>Swift</p>
        <p>SQL</p>
      </div>
      <div class="skill-wrapper">
        <h4>Frameworks</h4>
        <p>Vue</p>
        <p>React</p>
        <p>Flask</p>
      </div>
      <div class="skill-wrapper">
        <h4>Dev Tools</h4>
        <p>Git</p>
        <p>Docker</p>
        <p>Testing</p>
        <p>Jenkins</p>
        <p>AI</p>
      </div>
    </div>
    <h3>Projects</h3>
    <div class="project-grid-wrapper">
      <a class="item" href="https://github.com/griffindavidson/llm-web-gui">
        <h3>LLM Web GUI</h3>
        <p>A Web GUI for running LLMs locally via Ollama. For example, DeepSeek-R1</p>
        <h4>Features:</h4>
        <ul>
          <li>Node.js Backend</li>
          <li>Ollama API</li>
          <li>HTML/CSS/JS</li>
        </ul>
      </a>
      <a class="item" href="https://github.com/GreenXDShadow/CMPE165HotelProject">
        <h3>Hotels.com Clone</h3>
        <p>A Hotels.com clone that involves connecting to APIs and displaying data</p>
        <h4>Features:</h4>
        <ul>
          <li>Flask Backend</li>
          <li>SQLite DB</li>
          <li>React Frontend</li>
          <li>Authentication</li>
          <li>Radpid API</li>
        </ul>
      </a>
      <a class="item" href="https://github.com/griffindavidson/172project">
        <h3>Database Normalization</h3>
        <p>
          A web database project that interfaces with a SQL Database and follows ACID properties
        </p>
        <h4>Features:</h4>
        <ul>
          <li>Node.js Backend</li>
          <li>MySQL DB</li>
          <li>Authentication</li>
          <li>HTML/CSS/JS</li>
        </ul>
      </a>
      <a class="item" href="https://github.com/griffindavidson/cmpe195a-project">
        <h3>Senior Project</h3>
        <p>
          My senior project that connects with scientific research databases and chatGPT to curate
          the latest scientific research with simplified and accessible language
        </p>
        <h4>Features:</h4>
        <ul>
          <li>Node.js Backend</li>
          <li>Ollama API</li>
          <li>HTML/CSS/JS</li>
        </ul>
      </a>
    </div>
  </div>
</template>

<style scoped>
.skill-grid-wrapper {
  display: grid;
  position: relative;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin: 0 auto 1rem;
  justify-content: center;
  gap: 1rem;
}
.skill-wrapper {
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  background-color: var(--surface);
  border-radius: 1rem;
  box-shadow:
    0 1px 2px var(--shadow),
    0 8px 24px var(--shadow);
}
.skill-wrapper > h4 {
  margin-bottom: 0.5rem;
}
.project-wrapper {
  position: relative;
  z-index: 5;
  margin: 2rem auto 2rem;
  padding: 0 2rem;
  max-width: 1225px;
}
.project-grid-wrapper {
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 4rem 0.5fr 1rem 0.5fr;
  justify-content: center;
  gap: 1rem;
}
.item {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 4;
  padding: 1rem 1.5rem;
  z-index: 5;
  background-color: var(--surface);
  border-radius: 1rem;
  text-decoration: none;
  box-shadow:
    0 1px 2px var(--shadow),
    0 8px 24px var(--shadow);
  transition:
    transform 180ms ease,
    box-shadow 180ms ease;
}
.item:hover {
  transform: translateY(-2px);
  box-shadow:
    0 2px 6px var(--shadow),
    0 14px 32px var(--shadow-hover);
  h3 {
    text-decoration: underline;
  }
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
p,
li {
  color: var(--font-secondary);
}
</style>
