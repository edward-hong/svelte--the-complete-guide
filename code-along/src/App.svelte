<script>
	let name = 'Edward'
	let age = 30

	function incrementAge() {
		age+=1
	}
</script>

<main>
	<h1>Hello {name}, my age is {age}!</h1>
	<button on:click={incrementAge}>Change Age</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>