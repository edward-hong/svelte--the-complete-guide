<script>
  import meetups from './meetups-store.js'
  import { createEventDispatcher } from 'svelte'
  import TextInput from '../UI/TextInput.svelte'
  import Button from '../UI/Button.svelte'
  import Modal from '../UI/Modal.svelte'
  import { isEmpty, isValidEmail } from '../helpers/validation.js'

  export let id = null

  let title = ''
  let subtitle = ''
  let description = ''
  let imageUrl = ''
  let address = ''
  let email = ''

  if (id) {
    const unsubscribe = meetups.subscribe((items) => {
      const selectedMeetup = items.find((i) => i.id === id)
      title = selectedMeetup.title
      subtitle = selectedMeetup.subtitle
      description = selectedMeetup.description
      imageUrl = selectedMeetup.imageUrl
      address = selectedMeetup.address
      email = selectedMeetup.contactEmail
    })

    unsubscribe()
  }

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
    const meetupData = {
      title,
      subtitle,
      description,
      imageUrl,
      contactEmail: email,
      address,
    }

    if (id) {
      meetups.updateMeetup(id, meetupData)
    } else {
      fetch(
        'https://svelte-course-20eec-default-rtdb.firebaseio.com/meetups.json',
        {
          method: 'POST',
          body: JSON.stringify({ ...meetupData, isFavourite: false }),
          headers: { 'Content-type': 'application/json' },
        },
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error('An error occurred, please try again!')
          }
          return res.json()
        })
        .then((data) => {
          meetups.addMeetup({
            ...meetupData,
            isFavourite: false,
            id: data.name,
          })
        })
        .catch((err) => {
          console.log(err)
        })
    }

    dispatch('save')
  }

  function cancel() {
    dispatch('cancel')
  }

  function deleteMeetup() {
    meetups.removeMeetup(id)
    dispatch('save')
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
      bind:value={description}
      controlType="textarea" />
  </form>
  <div slot="footer">
    <Button type="button" mode="outline" on:click={cancel}>Cancel</Button>
    <Button type="button" on:click={submitForm} disabled={!formIsValid}>
      Save
    </Button>
    {#if id}
      <Button type="button" on:click={deleteMeetup}>Delete</Button>
    {/if}
  </div>
</Modal>
