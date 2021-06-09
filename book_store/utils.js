 const message = {
  STOCK_LEFT: (title, quantity) => {
    console.log(`${title} book has only ${quantity} stock left`)
  },
  OUT_OF_STOCK: (title, quantity) => {
    console.log(`sorry the ${title} book is ${quantity} available stock left`)
  },
  NOT_AVAILABLE: (name) => {
    console.log(`We don't sell that ${name} book, here at avion store`)
  },
  TOTAL_EARNINGS: (name, earnings) => {
    console.log(`The ${name} have total earnings of ${earnings}`)
  },
  INVENTORY_LIST: (title, quantity, value) => {
    console.log(`Book Title: ${title}, Quantity: ${quantity}, Value: ${value}`)
  }
}

export default message