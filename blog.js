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