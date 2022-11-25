<script lang="ts">
	import Card from "./components/Card.svelte";
	import Button from "./components/Button.svelte";
	import { onMount } from 'svelte';
	import {fetchCardApi} from "../api/requests";

	let cards = []
	let interval
	let isPending = false

	const fetchCard = async () => {
		try {
			clearInterval(interval)
			isPending = true
			const response = await fetchCardApi()
			if (response) cards = [...cards, response]
			isPending = false
		} catch (error) {
			isPending = false
			console.log(error);
		}
	};

	onMount(() => {
		fetchCard()
		interval = setInterval(fetchCard, 30000)
		return () => clearInterval(interval);
	});

</script>

<main>
	<div class="cards">
		{#each cards as card}
			<Card variety={card.variety}
				  origin={card.origin}
				  notes={card.notes}
				  intensifier={card.intensifier}
				  blend_name={card.blend_name}
			/>
		{/each}
	</div>
	<Button disabled={isPending} onClick={fetchCard}/>
</main>

<style>

	main {
		max-width: 500px;
		padding: 30px 10px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.cards {
		display: flex;
		flex-direction: column;
		grid-gap: 30px;
		margin-bottom: 30px;
		width: 100%;
	}

	@media (max-width: 600px) {
		main {
			padding: 30px 20px;
		}
	}
</style>