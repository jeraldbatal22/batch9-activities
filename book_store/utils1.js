const messages = {
  ADD_MESSAGE: (title, quantity, value) => {
    if(title && quantity && value) {
      console.log(`Successfully add ${title} with a quantity of ${quantity} and ${value} value price`)
    } else {
      console.log(`Error please input title and quantity`)
    }
  } ,
  RESTOCK_MESSAGE: (title, quantity) => {
    if(quantity) {
      console.log(`Successfully restock the quantity of ${title} to ${quantity}`)
    } else {
      console.log(`Youn don't restock the quantity of ${title}`)
    }
  },
  SELL_MESSAGE: (title, quantity) => {
    if(quantity) {
      console.log(`Successfully sell ${title} of ${quantity}`)
    } else {
      console.log(`Unsuccessfull to sell ${title} please put the quantity you want to sell`)
    }
  },

  // ADD_MESSAGE: (title, quantity, value) => {
  //   if(title || quantity || value) {
  //     console.log(`Successfully add ${title} ${quantity} ${value}`)
  //   } else {
  //     console.log(`Error ${title} ${quantity} ${value}`)
  //   }
  // },
  // ADD_MESSAGE: (title, quantity, value) => {
  //   if(title || quantity || value) {
  //     console.log(`Successfully add ${title} ${quantity} ${value}`)
  //   } else {
  //     console.log(`Error ${title} ${quantity} ${value}`)
  //   }
  // }, 
}

export default messages