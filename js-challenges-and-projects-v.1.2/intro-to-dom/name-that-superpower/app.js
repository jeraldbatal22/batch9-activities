var justiceLeague = [
    {name: "Superman", superpower: "Super strength"}, 
    {name: "Batman", superpower: "Super rich"},
    {name: "Wonder Woman", superpower: "Super lasso"}, 
    {name: "The Flash", superpower: "Super speed"}, 
    {name: "Green Lantern", superpower: "Super ring"}
]

const league = document.querySelector('#league')

for (const members of justiceLeague) {
    const li = document.createElement('li')
    li.textContent = `${members.name} - ${members.superpower}`
    league.appendChild(li)
}