class Queue {
  data = []
  maxSize

  constructor(initialData, maxSize = -1) {
    this.data = Array.isArray(initialData) ? initialData : (typeof initialData == "undefined" ? [] : [initialData]);
    this.maxSize = maxSize
  }

  isFull () {
    return this.maxSize !== -1 ? (this.data.length === this.maxSize) : false
  }

  isEmpty () {
    return this.data.length === 0
  }

  enqueue(item) {
    if(this.isFull()) {
      return false
    } 
    this.data.push(item)
    console.log(this.data)
  }

  *generator () {
    while(!this.isEmpty()) {
      yield this.data.shift()
    }
  }

  dequeue() {
    const {value, done } = this.generator().next()
    if(done) return false
    console.log(this.data)
    return value
  }
}

let q = new Queue(3, 2)
// let r = new Queue([4, 5, 6], 10)
let x = 0
while (x = q.dequeue()) {
  console.log(x)
}
q.enqueue(1)



