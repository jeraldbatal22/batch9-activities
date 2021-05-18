
function display () {

  // GREETINGS SECTION &&//
 // WELCOME SECTION  //
 const main_content = idSelector('main_content')
 main_content.style.display = "none"
 // eventListener('#name_input', 'keypress', putYourName)
 const name_input = document.querySelector('#name_input')
 name_input.addEventListener('keypress', putYourName)

 function putYourName (e) {
   const name_input = idSelector('name_input').value

   if(e.key === "Enter") {
     if(name_input === "") {
       const alert_message_forname = idSelector('alert_message_forname')
       alert_message_forname.innerHTML = "<p>PLEASE TELL ME YOUR NAME!</p>"
       alert_message_forname.style.color = "yellow"
       setTimeout(function(){ 
         alert_message_forname.innerHTML = ""
       ; }, 3000);
     } else {
       const welcome = idSelector('welcome')
       const your_name = idSelector('your_name')
       your_name.innerHTML = `<input type="text" value="${name_input}" id="putname">`
       welcome.style.display = "none"
       main_content.style.display = "block"
       your_name.style.fontWeight = "bolder"
       let date = new Date()
       let hours = date.getHours();
       let greetings_text = idSelector('greetings_text')
         if(hours > 17) {
           greetings_text.innerHTML = `Goodevening <i class="fas fa-heart"></i> Enjoy your night `
           main_content.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(./assets/images/dark2.jpg)"
         } else {
           greetings_text.innerHTML = `Goodmorning <i class="fas fa-heart"></i> Have a nice day `
           main_content.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(./assets/images/light1.jpg)"
         }
     }
   }
 }

 // SET TIME SECTION //

 function setTime() {
   let date = new Date()
   let hours = date.getHours();
   let minutes = date.getMinutes();
   let seconds = date.getSeconds();
   let ampm = hours > 12 ? 'pm' : 'am';
   seconds = seconds < 10 ? '0'+seconds : seconds;
   hours = hours % 12;
   hours = hours ? + hours : 12; // the hour '0' should be '12'
   hours = hours < 10 ? '0'+ hours : hours;
   minutes = minutes < 10 ? '0'+ minutes : minutes;
   return `${hours}:${minutes}:${seconds} ${ampm}`
   // minutes = minutes < 10 ? '0'+minutes : minutes;
   // seconds = seconds < 10 ? '0'+seconds : seconds;
   // return `${hours}:${minutes}:${seconds} `
 }
 setInterval ( function () {
   idSelector('time').innerHTML = `<h1>${setTime()}</h1>`
 },0)

 // TODO LIST SECTION //

 // SHOW TODO //

 const todo_list = idSelector('todo_list')
 const add_btn_todo = idSelector('add_btn_todo')
 add_btn_todo.addEventListener('click', showAddTodo)

 function showAddTodo () {
   todo_list.style.display = "block"
   add_btn_todo.style.display = "none"
 }
 
 window.addEventListener("click", windowOnClick);
 
 function windowOnClick(event) {
   if (event.target === add_btn_todo) {
     toggleModal();
   }
 }

 // HIDE TODO //

 const close_todo = idSelector('close_todo')
 close_todo.addEventListener('click', closeTodo)

 function closeTodo () {
   todo_list.style.display = "none"
   add_btn_todo.style.display = "flex"
   add_btn_todo.style.justifyContent = "center"
 }


 // ADD TODO //
 
 const todo_input = idSelector('todo_input')
 todo_input.addEventListener('keypress', addTodo)

 function addTodo (e) {
   if(e.key === 'Enter') {
     const compelete = idSelector('compelete')
     const todo_input = idSelector('todo_input')

     // const text = document.createTextNode = todo_input.value
     const text  = idSelector('todo_input').value

     const check_btn = document.createElement('button')
     const delete_btn = document.createElement('button')
     
     check_btn.innerHTML = `<i class="fas fa-check-circle" id="complete"></i>`
     delete_btn.innerHTML = `<i class="fas fa-trash-alt"></i>`
     if(text !== "") {
       const div = document.createElement('div')
       div.id = "todo_div"
       const not_compelete = idSelector('not_compelete')
       div.innerHTML = `<input type="text" value="${text}" disabled class="complete-todo"/>`
       todo_input.value = ""
       not_compelete.appendChild(div)
       div.appendChild(check_btn)
       div.appendChild(delete_btn)
     }
     check_btn.addEventListener('click', function () {
       const todo_div = idSelector('todo_div > input')
       const parent = this.parentNode;
       parent.remove()
       compelete.appendChild(parent)
       todo_div.style.textDecoration = "line-through"
       todo_div.style.textDecorationThickness = '3px'
       todo_div.style.textDecorationColor = 'green'
       check_btn.style.display = "none"
       delete_btn.style.marginLeft = "45px"
       
       // const parent_div = document.querySelector('#todo-div')
       // parent_div.remove()
       // compelete.appendChild(parent_div)
       // parent_div.style.textDecoration = "line-through"
       // check_btn.style.display = "none"
     })
     
     delete_btn.addEventListener('click', function () {
       const parent = this.parentNode;
       parent.remove()
       // const parent_div = document.querySelector('#todo-div')
       // parent_div.remove()
     })
   }
 }

 // DARK AND LIGHT MODE // 
 const dark_light = idSelector('dark_light')
 dark_light.addEventListener('click', changeBg)
 let condition = true 
 function changeBg () {
 const main_content_background = idSelector('main_content')
 let greetings_text = idSelector('greetings_text')
   if(condition) {
     greetings_text.innerHTML = `Goodevening <i class="fas fa-heart"></i> Enjoy your night `
     main_content_background.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(./assets/images/dark2.jpg)"
     condition = false
   } else {
     main_content_background.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(./assets/images/light1.jpg)"
     greetings_text.innerHTML = `Goodmorning <i class="fas fa-heart"></i> Have a nice day `
     
     condition = true
   }
 }

 // TODAY SECTION //

 const today_input = idSelector('today_input')
 today_input.addEventListener('keypress', putToday)

 function putToday (e) {
   const today_input_value = today_input.value
   const today = idSelector('today')
   if(e.key === "Enter") {
     if(today_input_value !== "") {
       const todo_checkbox = idSelector('today_checkbox')
       const your_todo = idSelector('your_todo')
       today.style.display = "none"
       todo_checkbox.style.display = "block"
       your_todo.innerHTML += `
       <h2 id="today_focus_value">${today_input_value}</h2>
       `
       
       const today_focus_value = idSelector('today_focus_value')
       let condition = true 
       const icon_complete = idSelector('icon_complete')
       icon_complete.addEventListener('click', function () {
         if(condition) {
           today_focus_value.style.textDecoration = "line-through"
           today_focus_value.style.textDecorationThickness = '10px'
           today_focus_value.style.textDecorationColor = '#ffff'
           condition = false
         } else {
           today_focus_value.style.textDecoration = "none"
           condition = true
         }      
     })
     randomQoutes()

     idSelector('today_input').value = ""
     const icon_back = idSelector('icon_back')

     icon_back.addEventListener('click', function () {
       todo_checkbox.style.display = "none"
       today.style.display = "flex"
       today_focus_value.remove()
     })
     } else {
       function validateMainFocus() {
         const alert_message_fortoday = idSelector('alert_message_fortoday')
         alert_message_fortoday.innerHTML += "<p>PLEASE INPUT YOUR TODAY MAIN FOCUS! </p>"
         alert_message_fortoday.style.color = "yellow"
         setTimeout(function(){ 
           alert_message_fortoday.innerHTML = ""
         ; }, 3000);
       }
       validateMainFocus()
     }
   }
 }

 // QOUTES SECTION //

 
 const randomQuote = [
   'The soul would have no rainbow if the eyes had no tears. always put and your mind that your are always incredible no mather what happens',
   'Blessings of grace and peace be with you today and everyday, always keep smiling and be the good people, remeber that you are the good people', 
   'Making mistakes is a natural part of the language learning process. The key is to learn from these mistakes. Don’t be afraid to try out new things in English but always remember to reflect on them and decide what was successful and what you need to keep working on.',
   'Learning a skill such as a new language can take a long time. If you feel like your progress is slow, bear in mind these wise words from Confucius. The important thing is to keep going and you will get there in the end.',
   'Remember, it is possible to communicate big ideas with relatively limited language. Don’t feel like you need perfect English before you can go out and have interesting conversations with other people.',
   'Things always have a way of working out. Never underestimate the power of prayer, faith and love.I believe this is one of the best quotes to live by because it reminds me to think without limits and never doubt my wildest thoughts.',
   'Everything is temporary! Emotions, thoughts, people and scenery. Do not become attached. Just flow with it. There’s a special place in my heart for these inspirational words. They remind me of my unwavering determination to become a motivational speaker.',
   'Positive thinking is not only about expecting the best to happen…but it is also about accepting whatever happens is for the best.',
   'Everything that God allows to come our way is always with a purpose. He uses even the greatest error and deepest pain to mold us into a better person.',
   'Let your soul expand, let your heart reach out to others in loving and generous warmth, and great and lasting will be your joy and prosperity will come to you.',
   'You can give joyfully only when you have found something so valuable within yourself that everything else does not mean so much to you anymore. Have A Joyful Day!',
   'A meaningful lifeis not a being rich, being popular, being highly educated, or being perfect. Its about being real, being humble, being able to share ourselves and touch the lives of other.'
 ]


 function randomQoutes () {
   const random_qoutes = idSelector('random_qoutes')
 
   let index = Math.floor(Math.random() * randomQuote.length)
   random_qoutes.innerHTML = randomQuote[index]
 
   const next = idSelector('next')
   next.addEventListener('click', function () {
     random_qoutes.innerHTML = ""
     if(random_qoutes.innerHTML === "") {
       const index = Math.floor(Math.random() * randomQuote.length)
       random_qoutes.innerHTML = randomQuote[index]
     }
     // 
     // console.log(randomQuote.length)
   })
   
   const prev = idSelector('prev')
   prev.addEventListener('click', function () {
     random_qoutes.innerHTML = ""
     if(random_qoutes.innerHTML === "") {
       const index = Math.floor(Math.random() * randomQuote.length)
       console.log(random_qoutes.innerHTML = randomQuote[index])
     }
   })

 }

 // ADD QOUTES //

 const textarea = idSelector('textarea')
 textarea.addEventListener('keypress', function (e) {
 if(e.key === "Enter") {
   const random_qoutes = idSelector('random_qoutes')
   random_qoutes.innerHTML = ""
   const textare_value = idSelector('textarea').value
   random_qoutes.innerHTML = `<p id="qoutes_add">${textare_value}</p>`
   idSelector('textarea').value = ""
   modal.classList.toggle("show-modal");
 }
})

 randomQoutes()

 // MODAL  SECTION //
 
 const modal = classSelector("modal");
 const add = idSelector("add");
 add.addEventListener("click", toggleModal);
 const closeButton = classSelector("close-button");
 closeButton.addEventListener("click", toggleModal);
 window.addEventListener("click", windowOnClick);
 function toggleModal() {
   modal.classList.toggle("show-modal");
   console.log('asdsadas')
 }

 function windowOnClick(event) {
   if (event.target === modal) {
     toggleModal();
   }
 }

}

display()





