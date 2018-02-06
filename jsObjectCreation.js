'use strict'

display("JAVASCRIPT OBJECT CREATION")
//object literal
var cat = {
  name:"Fluffy",
  color:"White"
}
cat.age = 3
cat['Eye Color'] = 'green'
display(cat['Eye Color'])


cat.speak=function(){
  display("maeoow")
}
display(cat)


//constructor function
function Cat(name,color){
  this.name=name
  this.color=color
}

var cat1 = new Cat("Fluffy","white");

display(cat1)
//Object.create

var cat2 = Object.create(Object.prototype,
{
  name:{
    value:"Fluffy"
  },
  color:{
    value:"White"
  }
})
display(cat2)
display(cat2.name)

//Using ES6 class

class Catt{
  constructor(name,color){
    this.name = name
    this.color = color
  }
  
  speak(){
    display('meeoow')
  }
  
}

var cat4=new Catt('Fluffy', 'White')
display(cat4)
