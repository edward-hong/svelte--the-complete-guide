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

export default meetups
