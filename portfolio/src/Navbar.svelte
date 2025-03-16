<script>
  import { Menu, Github, Twitter, Linkedin, Instagram } from "@lucide/svelte";

  let isOpen = false;
  function toggleMenu() {
    isOpen = !isOpen;
  }
</script>

<!-- Navbar fissa -->
<nav class="navbar">
  <!-- Sezione sinistra: link -->
  <div class="nav-left">
    <a href="/">Works</a>
    <a href="/">About</a>
    <a href="/">Contact</a>
  </div>

  <!-- Sezione centrale: brand -->
  <div class="nav-center">
    <a href="/" class="brand">Lorenzo Arsenti</a>
  </div>

  <!-- Sezione destra: icone aggiuntive -->
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

  <!-- Bottone hamburger per mobile -->
  <button class="hamburger" on:click={toggleMenu}>
    <Menu class="icon" />
  </button>
</nav>

<!-- Menu a tendina (visibile in mobile) -->
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
  /********************************************
   * Stili di base
   ********************************************/
  :global(body) {
    margin: 0;
    font-family: sans-serif;
    background: #fff; /* facoltativo, se vuoi sfondo bianco per la pagina */
  }

  /********************************************
   * Navbar
   ********************************************/
  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 0.75rem 2rem;
    background-color: #000;
    color: #fff;
    z-index: 999;

    /* Layout flex: spaziatura e allineamento */
    display: flex;
    align-items: center;
    /* Non usiamo justify-content: space-between
       perché vogliamo gestire manualmente la distribuzione
       con .nav-left, .nav-center, .nav-right */
  }

  .nav-left,
  .nav-right {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }

  /* Sezione centrale: brand davvero al centro */
  .nav-center {
    /* Occupa tutto lo spazio rimanente */
    flex: 1;
    display: flex;
    justify-content: center;
  }

  /* Stile del brand: ridotto, uppercase e un po' di letter-spacing */
  .brand {
    font-size: 1rem;
    font-weight: normal;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #fff;
    text-decoration: none;
  }

  /* Stile dei link della navbar */
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
    color: #888;
  }

  /* Icone Lucide: dimensioni leggermente più piccole e stroke ridotto */
  .icon {
    width: 20px;
    height: 20px;
    stroke: currentColor;
    fill: none;
    stroke-width: 1.3;
  }

  /********************************************
   * Bottone hamburger (mobile)
   ********************************************/
  .hamburger {
    display: none;
    border: none;
    background: none;
    color: #fff;
    cursor: pointer;
  }

  /********************************************
   * Menu a tendina (mobile)
   ********************************************/
  .dropdown-menu {
    position: fixed;
    top: 50px; /* leggermente meno spazio sotto la navbar */
    left: 50%;
    transform: translateX(-50%);
    width: 180px; /* un po' più stretto per un look più compatto */
    background-color: #000;
    border: 1px solid #444;
    border-radius: 6px;
    padding: 0.5rem 0;
    display: flex;
    flex-direction: column;
    z-index: 998;
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

  /********************************************
   * Responsive
   ********************************************/
  @media (max-width: 900px) {
    /* Nascondiamo nav-left e nav-right, mostriamo l’hamburger */
    .nav-left,
    .nav-right {
      display: none;
    }

    .hamburger {
      display: block;
    }
  }
</style>
