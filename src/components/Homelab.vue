<script setup></script>

<template>
  <div class="homelab-wrapper">
    <h2>Homelab IT</h2>
    <div class="skill-grid-wrapper">
      <div class="skill-wrapper">
        <h4>Hosted Services</h4>
        <p>Jellyfin</p>
        <p>Seerr</p>
        <p>Minecraft Java Server</p>
        <p>Forgejo (HTTPS & SSH)</p>
        <p>Caddy</p>
        <p>Proxmox</p>
        <p>Wireguard</p>
      </div>
      <div class="skill-wrapper">
        <h4>Networking Concepts</h4>
        <p>SSH</p>
        <p>TCP/IP (+ IPv6)</p>
        <p>Routing</p>
        <p>Firewall</p>
        <p>Rate Limiting</p>
        <p>VLANs</p>
        <p>DNS</p>
      </div>
      <div class="skill-wrapper">
        <h4>Hardware</h4>
        <p>Ubiquiti UDR7</p>
        <p>Intel Core Ultra 5 125H Server</p>
        <p>Ubiquiti UNAS-2</p>
        <p>Ubiquiti Switch Flex Mini 2.5Gb</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.homelab-wrapper {
  margin: 0 auto 2rem;
  position: relative;
  padding: 0 2rem;
  max-width: 1225px;
}
.skill-grid-wrapper {
  display: grid;
  position: relative;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin: 0.5rem auto 1rem;
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
h4 {
  margin-bottom: 0.5rem;
}
p {
  color: var(--font-secondary);
}
</style>
