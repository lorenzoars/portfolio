<script>
  export let title;
  export let description;
  export let image;
</script>

<div class="card">
  <img src={image} alt="image" />

  <div class="overlay">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
</div>

<style>
  .card {
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;
    cursor: pointer;
  }

  .card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    display: block;
  }

  .card:hover img {
    transform: scale(1.1);
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    padding: 1rem;
  }

  .card:hover .overlay {
    opacity: 1;
  }

  .overlay h2 {
    font-size: 2rem;
    margin: 0 0 0.5rem;
  }

  .overlay p {
    font-size: 1.2rem;
    margin: 0;
  }
</style>
