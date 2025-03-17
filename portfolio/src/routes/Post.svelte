<script>
  export let title;
  export let description;
  export let image;
</script>

<div class="post">
  <img src={image} alt={title} />

  <!-- Overlay che appare in hover -->
  <div class="overlay">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
</div>

<style>
  .post {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .post img {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
  }

  /* Effetto zoom leggero dell'immagine */
  .post:hover img {
    transform: scale(1.02);
  }

  /* L’overlay è nascosto di default (opacity: 0). */
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    /* Copre l'intera area della foto */
    width: 100%;
    height: 100%;

    /* Sfondo semi-trasparente */
    background-color: rgba(0, 0, 0, 0.5);

    /* Transizione per apparire gradualmente */
    opacity: 0;
    transition: opacity 0.3s ease;

    /* Per centrare testo verticalmente e orizzontalmente */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    /* Colore del testo bianco per contrasto */
    color: #fff;

    /* Spazio interno e distanza tra titolo e descrizione */
    padding: 1rem;
    gap: 0.5rem;
  }

  /* Al passaggio del mouse sul container .post, l’overlay diventa visibile */
  .post:hover .overlay {
    opacity: 1;
  }

  /* Stili del testo */
  .overlay h2 {
    margin: 0;
    font-size: 1.2rem;
    line-height: 1.2;
  }
  .overlay p {
    margin: 0;
    font-size: 1rem;
    line-height: 1.2;
  }
</style>
