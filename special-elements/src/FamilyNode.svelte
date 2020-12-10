<script context="module">
  console.log('Runs once!')

  let deactivateNode
</script>

<script>
  export let member

  let isActive

  console.log('Runs multiple times')

  function deactivate() {
    isActive = false
  }

  function activate() {
    if (deactivateNode) {
      deactivateNode()
    }

    isActive = true
    deactivateNode = deactivate
  }
</script>

<style>
  .active {
    color: red;
  }
</style>

<div on:click={activate} class:active={isActive}>
  <h1>{member.name}</h1>

  {#if member.isParent}
    <ul>
      {#each member.children as child}
        <li>
          <svelte:self member={child} />
        </li>
      {/each}
    </ul>
  {/if}
</div>

<hr />
