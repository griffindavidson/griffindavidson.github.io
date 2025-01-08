class PostElement extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML =
            `
            <a href="./blog/${this.getAttribute('article')}.html">
                <div class="article">
                    <div class="title">${this.getAttribute('title')}</div>
                    <div class="summary">${this.getAttribute('body')}</div>
                    <div class="publish-date">${this.getAttribute('publish-date')}</div>
                </div>
            </a>
            `;
        document.querySelector('.feed').appendChild(template.content.cloneNode(true));
    }
}

customElements.define('post-element', PostElement);

function goHome() {
    window.location = "./index.html";
    document.getElementById('home').checked = true;
}

function gotoProjects() {
    window.location = "./index.html#projects-section";
    document.getElementById('projects').checked = true;
}

window.addEventListener('popstate', () => {
    const currentPath = window.location.pathname;
    
    // Check if the URL path is '/blog/'
    if (currentPath === '/blog/') {
        document.getElementById('blog').checked = true;
    } else if (window.location.hash.trim() === '#projects-section') {
        document.getElementById('projects').checked = true;
    } else {
        document.getElementById('home').checked = true;
    }
});

function updateThemeColor() {
    const metaThemeColor = document.getElementById('theme-color');
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (isDarkMode) {
      // Set theme color for dark mode
      metaThemeColor.setAttribute('content', '#121212');  // Dark mode theme color (black)
    } else {
      // Set theme color for light mode
      metaThemeColor.setAttribute('content', '#eeeeee');  // Light mode theme color (white)
    }
  }

  // Call the function to set theme color on page load
  updateThemeColor();

  // Listen for changes in the system's color scheme (e.g., if the user switches themes)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateThemeColor);