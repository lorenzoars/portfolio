<script>
    export let title;
    export let description;
    export let image;

</script>
<div class="image"><img src={image} alt="image"></div>
<h2>{title}</h2>
<p>{description}</p>
<style>
    .image {
        background-size: cover;
        background-position: center;
        background-color: aqua;
        width: 100%;
        height: 300px;}     

        .image img {
            width: 100%;
            height: 100%;
            object-fit: cover;

        }
        </style>