<script>
  import Header from './UI/Header.svelte'
  import MeetupGrid from './Meetups/MeetupGrid.svelte'
  import TextInput from './UI/TextInput.svelte'
  import Button from './UI/Button.svelte'

  let title = ''
  let subtitle = ''
  let description = ''
  let imageUrl = ''
  let address = ''
  let email = ''

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
    },
  ]

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
</script>

<style>
  main {
    margin-top: 5rem;
  }

  form {
    width: 30rem;
    max-width: 90%;
    margin: auto;
  }
</style>

<Header />

<main>
  <form on:submit|preventDefault={addMeetup}>
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
  <MeetupGrid {meetups} />
</main>
