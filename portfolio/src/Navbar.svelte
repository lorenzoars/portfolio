<script>
  import { Menu, Github, Twitter, Linkedin, Instagram } from "@lucide/svelte";

  let isOpen = false;
  function toggleMenu() {
    isOpen = !isOpen;
  }
</script>

<!-- NAVBAR -->
<nav class="navbar">
  <!-- Sezione sinistra: link -->
  <div class="nav-left">
    <a href="/">Works</a>
    <a href="/">About</a>
    <a href="/">Contact</a>
  </div>

  <!-- Sezione destra: icone -->
  <div class="nav-right">
    <a href="https://github.com/lorenzo-arsenti" target="_blank" rel="noopener">
      <Github class="icon" />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener">
      <Instagram class="icon" />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener">
      <Twitter class="icon" />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener">
      <Linkedin class="icon" />
    </a>
  </div>

  <!-- Brand centrato -->
  <div class="nav-center">
    <a href="/" class="brand">Lorenzo Arsenti</a>
  </div>

  <!-- Bottone hamburger (mobile) -->
  <button class="hamburger" on:click={toggleMenu}>
    <Menu class="icon" />
  </button>
</nav>

<!-- MENU A TENDINA MOBILE -->
{#if isOpen}
  <div class="dropdown-menu">
    <a href="/" on:click={toggleMenu}>Works</a>
    <a href="/" on:click={toggleMenu}>About</a>
    <a href="/" on:click={toggleMenu}>Contact</a>
    <a href="https://github.com/lorenzo-arsenti" target="_blank" rel="noopener" on:click={toggleMenu}>
      <Github class="icon" /> GitHub
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener" on:click={toggleMenu}>
      <Twitter class="icon" /> Twitter
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener" on:click={toggleMenu}>
      <Linkedin class="icon" /> Linkedin
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener" on:click={toggleMenu}>
      <Instagram class="icon" /> Instagram
    </a>
  </div>
{/if}

<style>
  .navbar {
    position: relative;
    width: 100%;
    padding: 0.75rem 2rem;
    background-color: #000; /* Navbar nera */
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 999;
    border-bottom: 1px solid #444;
  }

  .nav-left,
  .nav-right {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }

  .nav-center {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .brand {
    font-size: 1rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #fff;
    text-decoration: none;
  }

  /* Link di sinistra e di destra */
  .nav-left a,
  .nav-right a {
    font-size: 0.9rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #fff;
    text-decoration: none;
    transition: color 0.3s;
  }
  .nav-left a:hover,
  .nav-right a:hover {
    color: #aaa;
  }

  .icon {
    width: 20px;
    height: 20px;
    stroke: currentColor;
    fill: none;
    stroke-width: 1.3;
    color: #fff;
  }

  .hamburger {
    display: none;
    border: none;
    background: none;
    color: #fff;
    cursor: pointer;
  }

  /* Dropdown menu (mobile) */
  .dropdown-menu {
    position: fixed;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    width: 180px;
    background-color: #000; /* sfondo nero */
    color: #fff;           /* testo bianco */
    border: 1px solid #444;
    border-radius: 6px;
    padding: 0.5rem 0;
    display: flex;
    flex-direction: column;
    z-index: 1000;
  }
  .dropdown-menu a {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    border-bottom: 1px solid #333;
    color: #fff;
    text-decoration: none;
  }
  .dropdown-menu a:last-child {
    border-bottom: none;
  }
  .dropdown-menu a:hover {
    background-color: #222;
  }

  @media (max-width: 900px) {
    .nav-left,
    .nav-right {
      display: none;
    }
    .hamburger {
      display: block;
    }
  }
</style>
