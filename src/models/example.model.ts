class Person {
  private name: string
  private last_name: string

  setName(name: string){
    this.name = name
  }

  setLastName(last_name: string){
    this.last_name = last_name
  }

  getFullName(): string {
    return `${this.name} ${this.last_name}`
  }
}

export default Person
