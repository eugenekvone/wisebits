<script lang="ts">
	import Card from "./components/Card.svelte";
	import Button from "./components/Button.svelte";
	import { onMount } from 'svelte';
	import {fetchCardApi} from "../api/requests";

	let cards = []
	let interval
	let isPending = false

	const startTimer = () => {
		interval && clearInterval(interval);
		interval = setInterval(fetchCard, 30000)
	}

	const fetchCard = async () => {
		try {
			isPending = true
			const response = await fetchCardApi()
			if (response) cards = [...cards, response]
			isPending = false
		} catch (error) {
			isPending = false
			console.log(error);
		}
	};

	const onFetch = () => {
		fetchCard()
		startTimer()
	}

	onMount(() => {
		onFetch()
		return () => interval && clearInterval(interval);
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
	<Button disabled={isPending} onClick={onFetch}/>
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