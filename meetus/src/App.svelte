<script>
  import Header from './UI/Header.svelte'
  import MeetupGrid from './Meetups/MeetupGrid.svelte'
  import EditMeetup from './Meetups/EditMeetup.svelte'
  import Button from './UI/Button.svelte'

  let meetups = [
    {
      id: 'm1',
      title: 'Coding Bootcamp',
      subtitle: 'Learn to code in 2 hours',
      description:
        'In this meetup, we will have some experts that teach you how to code',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/7/75/Sutton_High_Street%2C_Sutton%2C_London%2C_Caffe_Nero.jpg',
      address: '27th Nerd Road, 32523 New York',
      contactEmail: 'code@test.com',
      isFavourite: false,
    },
    {
      id: 'm2',
      title: 'Swim Together',
      subtitle: "Let's go for some swimming",
      description: 'We will simply swim some rounds',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/d/d1/Baku_Aquatic_Palace%2C_Olympic_Pool.jpg',
      address: '7th Swim Road, 53212 Brooklyn',
      contactEmail: 'swim@test.com',
      isFavourite: false,
    },
  ]

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
  <MeetupGrid {meetups} on:togglefavourite={toggleFavourite} />
</main>
