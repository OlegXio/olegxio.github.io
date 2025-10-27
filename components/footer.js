class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: var(--footer-bg, #1e293b);
          color: white;
          padding: 2rem;
          text-align: center;
        }
        
        .copyright {
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }
        
        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
        }
        
        .social-links a {
          color: white;
          transition: color 0.3s ease;
        }
        
        .social-links a:hover {
          color: #3b82f6;
        }
      </style>
      <footer>
        <div class="copyright">
          &copy; ${new Date().getFullYear()} OlegXio. All rights reserved.
        </div>
        <div class="social-links">
          <a href="https://github.com/olegxio" target="_blank" aria-label="GitHub">
            <i data-feather="github"></i>
          </a>
          <a href="mailto:sudosudo@i2pmail.org" aria-label="Email">
            <i data-feather="mail"></i>
          </a>
          <a href="https://t.me/contact_to_sudo_bot" target="_blank" aria-label="Telegram">
            <i data-feather="send"></i>
          </a>
        </div>
      </footer>
    `;
    feather.replace();
  }
}
customElements.define('custom-footer', CustomFooter);

