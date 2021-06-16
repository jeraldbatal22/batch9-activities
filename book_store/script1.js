import messageMixxin from './utils.js'
import messages from './utils1.js'

class MainStore {
  constructor(name, list, earnings) {
    this.name = name,
    this.list = list,
    this.earnings = earnings
  }
  
  // ADDING BOOK
  add(title, quantity, value) {
    this.list.push({title, quantity, value})
  }

  // RESTOCK BOOK
  reStock(title, quantity) {
    this.list.some((book) => book.title === title ?  book.quantity += quantity : null)
  }

  // SELL BOOK
  sell(name, qty) {
    const data = this.list.find((book) => book.title === name)
    if (typeof data !== 'undefined') {
      let { title, quantity, value } = data
      if (quantity >= qty) {
        quantity -= qty
        this.earnings += qty * value
        return messageMixxin.STOCK_LEFT(title, quantity)
      }
      return messageMixxin.OUT_OF_STOCK(title, quantity)
    }
    messageMixxin.NOT_AVAILABLE(name)
  }

  //TOTAL EARNINGS
  totalEarnings() {
    messageMixxin.TOTAL_EARNINGS(this.name, this.earnings)
  }

  // LIST OF INVENTORY
  listInventory() {
    this.list.map((book) => messageMixxin.INVENTORY_LIST(book.title, book.quantity, book.value))
  }
}

class BookStore extends MainStore {

  constructor(name, list, earnings) {
    super(name, list, earnings);
  }

  addBook(title, quantity, value) {
    this.add(title, quantity, value ) 
    messages.ADD_MESSAGE(title, quantity, value)
  }

  reStockBook(title, quantity) {
    this.reStock(title, quantity)
    messages.RESTOCK_MESSAGE(title, quantity)
  }

  sellBook(name, qty) {
    this.sell(name, qty)
    messages.SELL_MESSAGE(name, qty)
  }

  totalEarningsBook() {
    this.totalEarnings()
  }

  listInventoryBook() {
    this.listInventory()
  }
}

class LaptopStore extends MainStore {

  constructor(name, list, earnings) {
    super(name, list, earnings);
  }

  addlaptop(title, quantity, value) {
    this.add(title, quantity, value)
    // messages.RESTOCK_MESSAGE(title, quantity)
  }

  reStockLaptop(title, quantity) {
    this.reStock(title, quantity)
    // messages.RESTOCK_MESSAGE(title, quantity)
  }

  sellLaptop(name, qty) {
    this.sell(name, qty)
    // messages.SELL_MESSAGE(name, qty)
  }

  totalEarningsLaptop() {
    this.totalEarnings()
  }

  listInventoryLaptop() {
    this.listInventory()
  }
}

const books = new BookStore('BookStore', [], 0) // BOOKS STORE
const laptops = new LaptopStore('LaptopStore', [], 0) // LAPTOP STORE

// ADD BOOKS
books.addBook('Cinder', 20, 3000)
books.addBook('The Purdge', 20, 4000)
books.addBook('Lord of Rings', 20, 5000)

// ADD LAPTOPS
laptops.addlaptop('Asus', 20, 30000)
laptops.addlaptop('Lenovo', 20, 40000)
laptops.addlaptop('Acer', 20, 50000)

//RE STOCK BOOKS
books.reStockBook('Cinder', 20)

//RE STOCK BOOKS
laptops.reStockLaptop('Asus', 20)

// SELL BOOKS
books.sellBook('Cinder', 10)

// SELL LAPTOPS
laptops.sellLaptop('Asus', 20)

// TOTAL EARNINGS BOOKS
books.totalEarningsBook()

// TOTAL EARNINGS LAPTOPS
laptops.totalEarningsLaptop()

// LIST OF INVENTORY BOOKS
books.listInventoryBook()
// console.log(books)

// LIST OF INVENTORY LAPTOPS
laptops.listInventoryLaptop()
// console.log(laptops)


const mainStore = new MainStore('Main Store', [], 0)
mainStore.earnings =`Total earnings of ${mainStore.name} is ${books.earnings + laptops.earnings}`
mainStore.list.push(books, laptops)
// console.log(mainStore)

// for(const row of mainStore.list) {
//   console.log(row.list)
// }