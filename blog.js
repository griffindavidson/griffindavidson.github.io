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