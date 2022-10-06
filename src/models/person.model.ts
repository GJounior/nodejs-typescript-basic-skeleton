class Person {
  private name: string
  private last_name: string
  private years_old: number

  constructor(){
    this.name = ''
    this.last_name = ''
    this.years_old = 0
  }

  setName(name: string){
    this.name = name
  }

  setLastName(last_name: string){
    this.last_name = last_name
  }

  setYearsOld( years_old: number ){
    this.years_old = years_old
  }

  getYearsOld(): number {
    return this.years_old
  }

  getFullName(): string {
    return `${this.name} ${this.last_name}`
  }
}

export default new Person()
