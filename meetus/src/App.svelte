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

  function addMeetup() {
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
</script>

<style>
  main {
    margin-top: 5rem;
  }
</style>

<Header />

<main>
  <Button caption="New Meetup" on:click={() => (editMode = 'add')} />
  {#if editMode === 'add'}
    <EditMeetup />
  {/if}
  <MeetupGrid {meetups} on:togglefavourite={toggleFavourite} />
</main>
