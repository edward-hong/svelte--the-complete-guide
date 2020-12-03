<script>
  let val = ''

  $: console.log(val)

  function setValue(event) {
    val = event.target.value
  }
</script>

<style>

</style>

<!-- <input type="text" value={val} on:input={setValue} /> -->
<input type="text" bind:value={val} />
