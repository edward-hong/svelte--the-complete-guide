import { writable } from 'svelte/store'

const meetups = writable([
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
])

const customMeetupsStore = {
  subscribe: meetups.subscribe,
  addMeetup: (meetupData) => {
    const newMeetup = {
      ...meetupData,
      id: Math.random().toString(),
      isFavourite: false,
    }
    meetups.update((items) => {
      return [newMeetup, ...items]
    })
  },
  updateMeetup: (id, meetupData) => {
    meetups.update((items) => {
      const meetupIndex = items.findIndex((i) => i.id === id)
      const updatedMeetup = { ...items[meetupIndex], ...meetupData }
      const updatedMeetups = [...items]
      updatedMeetups[meetupIndex] = updatedMeetup
      return updatedMeetups
    })
  },
  removeMeetup: (id) => {
    meetups.update((items) => {
      return items.filter((i) => i.id !== id)
    })
  },
  toggleFavourite: (id) => {
    meetups.update((items) => {
      const updatedMeetup = { ...items.find((m) => m.id === id) }
      updatedMeetup.isFavourite = !updatedMeetup.isFavourite
      const meetupIndex = items.findIndex((m) => m.id === id)
      const updatedMeetups = [...items]
      updatedMeetups[meetupIndex] = updatedMeetup
      return updatedMeetups
    })
  },
}

export default customMeetupsStore
