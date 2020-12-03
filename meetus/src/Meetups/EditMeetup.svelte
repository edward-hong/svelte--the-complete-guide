<script>
  import { createEventDispatcher } from 'svelte'
  import TextInput from '../UI/TextInput.svelte'
  import Button from '../UI/Button.svelte'
  import Modal from '../UI/Modal.svelte'
  import { isEmpty, isValidEmail } from '../helpers/validation.js'

  let title = ''
  let titleValid = false
  let subtitle = ''
  let subtitleValid = false
  let description = ''
  let descriptionValid = false
  let imageUrl = ''
  let imageUrlValid = false
  let address = ''
  let addressValid = false
  let email = ''
  let emailValid = false
  let formIsValid = false

  const dispatch = createEventDispatcher()

  $: titleValid = !isEmpty(title)
  $: subtitleValid = !isEmpty(subtitle)
  $: descriptionValid = !isEmpty(description)
  $: imageUrlValid = !isEmpty(imageUrl)
  $: addressValid = !isEmpty(address)
  $: emailValid = isValidEmail(email)
  $: formIsValid =
    titleValid &&
    subtitleValid &&
    descriptionValid &&
    imageUrlValid &&
    addressValid &&
    emailValid

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

  function cancel() {
    dispatch('cancel')
  }
</script>

<style>
  form {
    width: 100%;
  }
</style>

<Modal title="Edit Meedup Data" on:cancel>
  <form on:submit|preventDefault={submitForm}>
    <TextInput
      id="title"
      label="Title"
      valid={titleValid}
      validityMessage="Please enter a valid title."
      value={title}
      on:input={(e) => (title = e.target.value)} />
    <TextInput
      id="subtitle"
      label="Subtitle"
      valid={subtitleValid}
      validityMessage="Please enter a valid subtitle."
      value={subtitle}
      on:input={(e) => (subtitle = e.target.value)} />
    <TextInput
      id="address"
      label="Address"
      valid={addressValid}
      validityMessage="Please enter a valid address."
      value={address}
      on:input={(e) => (address = e.target.value)} />
    <TextInput
      id="imageUrl"
      label="Image URL"
      valid={imageUrlValid}
      validityMessage="Please enter a valid image URL."
      value={imageUrl}
      on:input={(e) => (imageUrl = e.target.value)} />
    <TextInput
      id="email"
      label="E-Mail"
      valid={emailValid}
      validityMessage="Please enter a valid email."
      value={email}
      type="email"
      on:input={(e) => (email = e.target.value)} />
    <TextInput
      id="description"
      label="Description"
      valid={descriptionValid}
      validityMessage="Please enter a valid description."
      value={description}
      controlType="textarea"
      on:input={(e) => (description = e.target.value)} />
  </form>
  <div slot="footer">
    <Button type="button" mode="outline" on:click={cancel}>Cancel</Button>
    <Button type="button" on:click={submitForm} disabled={!formIsValid}>
      Save
    </Button>
  </div>
</Modal>
