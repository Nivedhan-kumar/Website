let display = {
    firsetName: 'Nivedhan',
    lastName: 'kumar',
    get fullname(){
      return `${this.firsetName} ${this.lastName}`
      },
  set fullname(value){
    let values = value.split(' ')
        this.firsetName = values[0],
        this.lastName = values[1] ?? '';
    }
  }
  
  display.fullname= 'vijaykumar'
  console.log(display.fullname)