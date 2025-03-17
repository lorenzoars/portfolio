<script>
	import Header from './Header.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import '../app.css';
	import videoFile from '../lib/images/TDMovieOut.0.mp4';

	let showContent = false;

	onMount(() => {
		// Dopo 4 secondi, mostra il contenuto
		setTimeout(() => {
			showContent = true;
		}, 4000);
	});
</script>

<!-- Video in background: sempre presente -->
<div class="video-background" class:darken={showContent}>
	<video
		src={videoFile}
		autoplay
		muted
		playsinline
		loop
	></video>
</div>

<!-- Contenuto dell'app che appare sopra il video -->
{#if showContent}
	<div class="app" transition:fade={{ duration: 500 }}>
		<Header />
		<main>
			<slot />
		</main>
		<footer>
			<p>Copyright 2025</p>
		</footer>
	</div>
{/if}

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		background-color: #fff;
		color: #000;
		font-family: sans-serif;
	}

	/* Video in background a schermo intero, sempre presente e responsive */
	.video-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		overflow: hidden;
		transition: filter 0.5s ease;
	}
	.video-background video {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	/* Classe che scurisce il video quando showContent è true */
	.darken {
		filter: brightness(0.3);
	}

	.app {
		position: relative;
		z-index: 2; /* Posizionato sopra il video */
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		margin-top: 4rem;
	}
</style>
