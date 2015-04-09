User.create([
  {email: 'mike@mike.mike',
   password: 'password', password_confirmation: 'password' },
  {email: 'tina@tina.tina',
   password: 'password', password_confirmation: 'password' },
  {email: 'jake@jake.jake',
   password: 'password', password_confirmation: 'password' },
  {email: 'chris@chris.chris',
   password: 'password', password_confirmation: 'password' },
  {email: 'david@david.david',
   password: 'password', password_confirmation: 'password' }
])

Trail.create([
  { name: 'Dog Mountain',
    description: 'yes this is great its so warm here',
    address: "45.6993, -121.7066" },
  { name: 'Salmon Creek Trail',
    description: 'no this is great its so warm here',
    address: "45.7075, -122.6658",
    location: "Vancouver, WA"}
  ])
