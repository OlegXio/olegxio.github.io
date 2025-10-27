class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: var(--nav-bg, #1e293b);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 50;
          transition: background-color 0.3s ease;
        }
        
        .logo {
          color: white;
          font-weight: bold;
          font-size: 1.5rem;
          font-family: 'JetBrains Mono', monospace;
          background: linear-gradient(to right, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        ul {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          transition: all 0.3s ease;
          position: relative;
        }
        
        a:hover {
          color: #3b82f6;
        }
        
        a::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: #3b82f6;
          transition: width 0.3s ease;
        }
        
        a:hover::after {
          width: 70%;
        }
        
        @media (max-width: 768px) {
          nav {
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
          }
          
          ul {
            width: 100%;
            justify-content: center;
          }
        }
      </style>
      <nav>
        <a href="#" class="logo">OlegXio</a>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contacts">Contacts</a></li>
        </ul>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);