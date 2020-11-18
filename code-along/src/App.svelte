<script>
  let name = 'Edward'
  let age = 30

  $: uppercaseName = name.toUpperCase()
  $: console.log(name)
  $: if (name === 'Ed') {
    console.log('It runs!')
    age = 31
  }

  function incrementAge() {
    age += 1
  }

  function changeName() {
    name = 'Ed'
  }

  function nameInput(event) {
    const enteredValue = event.target.value
    name = enteredValue
  }
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<main>
  <h1>Hello {uppercaseName}, my age is {age}!</h1>
  <button on:click={incrementAge}>Change Age</button>
  <!-- <button on:click={changeName}>Change Name</button> -->
  <!-- <input type="text" value={name} on:input={nameInput} /> -->
  <input type="text" bind:value={name} />
</main>
