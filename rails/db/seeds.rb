User.create([
  {email: 'mike@mike.mike',
   password: 'password', password_confirmation: 'password' },
  {email: 'tina@tina.tina',
   password: 'password', password_confirmation: 'password' },
  {email: 'jake@jake.jake',
   password: 'password', password_confirmation: 'password' }
])

Trail.create([
  { name: 'devil pass',
    description: 'yes this is great its so warm here',
    latitude: 23.34,
    longitude: 23.54,
    location: "Portland, OR" },
  { name: 'blag pass',
    description: 'no this is great its so warm here',
    latitude: 53.34,
    longitude: 43.54,
    location: "Beaverton, OR" },
  { name: 'bluetrail pass',
    description: 'whatever this is great its so warm here',
    latitude: 53.34,
    longitude: 73.54,
    location: "Greshy, OR" },
  { name: 'red pass',
    description: 'yes holler its so warm here',
    latitude: 13.34,
    longitude: 73.54,
    location: "Sortland, OR" }
  ])
