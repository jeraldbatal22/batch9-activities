var justiceLeague = [
    {name: "Superman", superpower: "Super strength"}, 
    {name: "Batman", superpower: "Super rich"},
    {name: "Wonder Woman", superpower: "Super lasso"}, 
    {name: "The Flash", superpower: "Super speed"}, 
    {name: "Green Lantern", superpower: "Super ring"}
]

const league = document.querySelector('#league')

for (let i = 0 ; i < justiceLeague.length ; i++) {
    const li = document.createElement('li')
    li.textContent = ` ${justiceLeague[i].name} - ${justiceLeague[i].superpower}`
    league.appendChild(li)
}