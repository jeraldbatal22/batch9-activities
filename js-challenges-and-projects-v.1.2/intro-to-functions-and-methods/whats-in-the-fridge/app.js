const downButton = document.querySelector('#down')
const upButton = document.querySelector('#up')
const buyListDisplay = document.querySelector('#first-list')
const fridgeListDisplay = document.querySelector('#second-list')

const buyList = ['chicharon', 'buko pie', 'mango', 'bacon' ]
const fridge = ['blue', 'red' , 'green' , 'white', 'black']
const remove_first = buyList.shift()
fridge.unshift(remove_first)
const remove_last = buyList.pop()
fridge.unshift(remove_last)
//Challenge: Please fill the fridge array with 5 items of your choice. 


//Challenge 2: You have bought some chicharon.
//Please remove it from the buyList and add it to the items in fridge.


//Challenge 3: Write a function that will remove an item from the fridge,
//and put it in the buyList, on the press of the moveUp button.

function moveUp(){
    //your code
  const join = [...buyList, ...fridge]
  buyListDisplay.innerHTML = ""
  fridgeListDisplay.innerHTML = join
}

upButton.addEventListener('click', moveUp)

//Challenge 4: Write a function that will remove the last item in the buyList, 
//and put it in the fridge.

function moveDown(){
    //your code
  const join = [...buyList, ...fridge]
  buyListDisplay.innerHTML = join
  fridgeListDisplay.innerHTML = ""
}

downButton.addEventListener('click', moveDown)

buyListDisplay.innerHTML = buyList
fridgeListDisplay.innerHTML = fridge