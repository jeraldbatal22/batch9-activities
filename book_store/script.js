import message from './utils.js'

class MainStore {
  constructor(name, list, earnings) {
    this.name = name,
    this.list = list,
    this.earnings = earnings
  }
}

class BookStore extends MainStore {

  constructor(name, list, earnings) {
    super(name, list, earnings);
  }

  addBook(title, quantity, value) {
    this.list.push({title, quantity, value})
  }

  reStock(title, quantity) {
    this.list.some((book) => book.title === title ?  book.quantity += quantity : null)
  }

  sellBook(name, qty) {
    const data = this.list.find((book) => book.title === name)
    if (typeof data !== 'undefined') {
      let { title, quantity, value } = data
      if (quantity >= qty) {
        quantity -= qty
        this.earnings += qty * value
        return message.STOCK_LEFT(title, quantity)
      }
      return message.OUT_OF_STOCK(title, quantity)
    }
    message.NOT_AVAILABLE(name)
  }

  totalEarnings() {
    message.TOTAL_EARNINGS(this.name, this.earnings)
  }

  listInventory() {
    this.list.map((book) => {
    message.INVENTORY_LIST(book.title, book.quantity, book.value)
    })
  }

}

const store = new BookStore('Avion Store', [], 0) // MAIN STORE

//ADD BOOK
store.addBook('Cinder', 20, 3000) 
store.addBook('The Purdge', 20, 4000) 

// RE STOCK BOOK
store.reStock('The Purdge', 20) 

// SELL BOOK 
store.sellBook('Cinder', 10) 
store.sellBook('The Purdge', 15) 
store.sellBook('Forest Gump', 15) 
 
// TOTAL EARNINGS
store.totalEarnings() 

// LIST OF INVENTORY
store.listInventory() 
console.log(store)