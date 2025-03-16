<script>
	import Post from './Post.svelte';
	let { data } = $props();
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Ars portfolio" />
</svelte:head>

<!-- Avvolgiamo i post in un container griglia -->
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
	/* Aggiunge spazio sotto l’header */
	.page-section {
		margin-top: 4rem; /* oppure padding-top: 4rem, se preferisci */
	}

	/* Definisce una griglia a 2 colonne per i post */
	.container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		justify-items: center;
		max-width: 64rem;
		margin: 0 auto;
		padding: 1rem;
		box-sizing: border-box;
	}
</style>
