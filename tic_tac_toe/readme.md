  ES6 TOPIC
  
  ..... PROMISES ....

const findUserData = () => {
 
   return new Promise ((resolve, reject) => {
      const user = {
        name: "Berto",
        age:23,
        email: 'sample@sample.com'
      }
      if (user) {
        resolve(`Your user ${user.name} ${user.age} ${user.email}`)
      } else {
        reject('User not found')
      }
    })
  }

  findUserData()
  .then((success) => console.log(success))
  .catch((error) => console.log(error))



....... Fetch ....

browser

 fetch('https://jsonplaceholder.typicode.com/comments/1')
  .then((response) => response.json())
  .then((data) => console.log(` Post Id: ${data.postId} , ${data.name},${data.id}, ${data.email},${data.body}`))
  

vscode

const fetch = require('node-fetch')
fetch('https://jsonplaceholder.typicode.com/comments/1')
.then((response) => response.json())
.then((data) => console.log(` Post Id: ${data.postId} , Name: ${data.name}, Id: ${data.id}, Email: ${data.email}, body:${data.body}`))


........ ascyn await.....

const fetch = require('node-fetch')

async function getJoke () {
  let joke_message = new Promise ((resolve, reject) => {
    fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    resolve('This is the joke')
  })
  let result = await joke_message

  console.log(result)
  
}

getJoke()