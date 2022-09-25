interface EventList  {
  on: (name: string, fn: Function)=> void
  emit: (name: string, ...arg: Array<any>) => void
  off: (name: string) => void
  once: (name: string) => void

}
interface List  {
  [key:  string]: Array<Function>
}
class Dispathch implements EventList {
  list: List
  constructor() {
    this.list = {}
  }
  on(name: string, fn: Function) {

  }
  emit(name: string, ...args: Array<any>) {

  }
  off() {}
  once() {}
}

const o = new Dispathch()

o.on('post', () => {

})

o.emit('post', 1, false, {name: 33})

export {}


