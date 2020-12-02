<script>
  import { createEventDispatcher } from 'svelte'
  import TextInput from '../UI/TextInput.svelte'
  import Button from '../UI/Button.svelte'

  let title = ''
  let subtitle = ''
  let description = ''
  let imageUrl = ''
  let address = ''
  let email = ''

  const dispatch = createEventDispatcher()

  function submitForm() {
    dispatch('save', {
      title,
      subtitle,
      description,
      imageUrl,
      address,
      email,
    })
  }
</script>

<style>
  form {
    width: 30rem;
    max-width: 90%;
    margin: auto;
  }
</style>

<form on:submit|preventDefault={submitForm}>
  <TextInput
    id="title"
    label="Title"
    value={title}
    on:input={(e) => (title = e.target.value)} />
  <TextInput
    id="subtitle"
    label="Subtitle"
    value={subtitle}
    on:input={(e) => (subtitle = e.target.value)} />
  <TextInput
    id="address"
    label="Address"
    value={address}
    on:input={(e) => (address = e.target.value)} />
  <TextInput
    id="imageUrl"
    label="Image URL"
    value={imageUrl}
    on:input={(e) => (imageUrl = e.target.value)} />
  <TextInput
    id="email"
    label="E-Mail"
    value={email}
    type="email"
    on:input={(e) => (email = e.target.value)} />
  <TextInput
    id="description"
    label="Description"
    value={description}
    controlType="textarea"
    on:input={(e) => (description = e.target.value)} />
  <Button type="submit" caption="Save" />
</form>
