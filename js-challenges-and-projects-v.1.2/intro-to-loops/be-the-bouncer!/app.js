const nightClubRegister = [
    {
        name: 'Tony',
        lastname: 'Stark',
        age: 25,
        gender: 'male'
    },
    {
        name: 'Harry',
        lastname: 'Potter',
        age: 16,
        gender: 'male'
    },
    {
        name: 'Hermione',
        lastname: 'Granger',
        age: 17,
        gender: 'female'
    },
    {
        name: 'Steve',
        lastname: 'Rogers',
        age: 62,
        gender: 'male'
    }
]

for (let i = 0 ; i < nightClubRegister.length ; i++) {
    if (nightClubRegister[i].age > 18 || nightClubRegister[i].gender === 'male') {
        console.log(`Welcome Mr ${nightClubRegister[i].name} please come in`)
    } else {
        console.log(`Sorry Ms ${nightClubRegister[i].name} your not in the list`)
    }
}