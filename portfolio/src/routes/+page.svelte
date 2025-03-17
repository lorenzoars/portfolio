<script>
	import Post from './Post.svelte';
	let { data } = $props();
</script>

<svelte:head>
	<title>Portfolio</title>
	<meta name="description" content="Ars portfolio" />
</svelte:head>

<section class="page-section">
	<div class="container">
		{#each data.works as post}
			<Post
				title={post.title}
				description={post.description}
				image={post.image}
			/>
		{/each}
	</div>
</section>

<style>
	.page-section {
		margin: 0;
		padding: 0;
	}

	.container {
		/* Disposizione a 2 colonne */
		display: grid;
		grid-template-columns: repeat(2, 1fr);

		/* Spazio minimo tra le foto */
		gap: 2px;

		/* Limite di larghezza e margini laterali */
		max-width: 1600px;
		margin: 2rem auto;  /* margine verticale e centratura orizzontale */
		padding: 0 1rem;    /* padding orizzontale per non aderire ai bordi */

		width: 100%;
		box-sizing: border-box;
	}

	/* Esempio di responsive: sotto i 720px, una colonna */
	@media (max-width: 720px) {
		.container {
			grid-template-columns: 1fr;
		}
	}
</style>
