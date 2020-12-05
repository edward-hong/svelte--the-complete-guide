<script>
  import meetups from './Meetups/meetups-store.js'
  import Header from './UI/Header.svelte'
  import MeetupGrid from './Meetups/MeetupGrid.svelte'
  import EditMeetup from './Meetups/EditMeetup.svelte'
  import Button from './UI/Button.svelte'

  let editMode = null

  function addMeetup({
    detail: { title, subtitle, description, imageUrl, email, address },
  }) {
    const newMeetup = {
      id: Math.random().toString(),
      title,
      subtitle,
      description,
      imageUrl,
      contactEmail: email,
      address,
    }

    meetups = [newMeetup, ...meetups]
    editMode = null
  }

  function toggleFavourite(event) {
    const id = event.detail
    const updatedMeetup = { ...meetups.find((m) => m.id === id) }
    updatedMeetup.isFavourite = !updatedMeetup.isFavourite
    const meetupIndex = meetups.findIndex((m) => m.id === id)
    const updatedMeetups = [...meetups]
    updatedMeetups[meetupIndex] = updatedMeetup
    meetups = updatedMeetups
  }

  function cancelEdit() {
    editMode = null
  }
</script>

<style>
  main {
    margin-top: 5rem;
  }

  .meetup-controls {
    margin: 1rem;
  }
</style>

<Header />

<main>
  <div class="meetup-controls">
    <Button on:click={() => (editMode = 'add')}>New Meetup</Button>
  </div>
  {#if editMode === 'add'}
    <EditMeetup on:save={addMeetup} on:cancel={cancelEdit} />
  {/if}
  <MeetupGrid meetups={$meetups} on:togglefavourite={toggleFavourite} />
</main>
