<script>
  import CustomInput from './CustomInput.svelte'
  import Toggle from './Toggle.svelte'

  let val = 'Edward'
  let selectedOption = 1
  let price = 0
  let agreed
  let favColor = ['green']

  $: console.log(val)
  $: console.log(selectedOption)
  $: console.log(price)
  $: console.log(agreed)
  $: console.log(favColor)

  function setValue(event) {
    val = event.target.value
  }
</script>

<style>

</style>

<!-- <input type="text" value={val} on:input={setValue} /> -->
<!-- <input type="text" bind:value={val} /> -->
<CustomInput bind:val />

<Toggle bind:chosenOption={selectedOption} />

<input type="number" bind:value={price} />

<label>
  <input type="checkbox" bind:checked={agreed} />
  Agree to terms?
</label>

<h1>Favourite Color?</h1>
<label>
  <input type="checkbox" name="color" value="red" bind:group={favColor} />
  Red
</label>
<label>
  <input type="checkbox" name="color" value="green" bind:group={favColor} />
  Green
</label>
<label>
  <input type="checkbox" name="color" value="blue" bind:group={favColor} />
  Blue
</label>
