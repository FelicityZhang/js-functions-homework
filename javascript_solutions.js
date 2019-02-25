// excercise 1
const getUser = function (){
      console.log('Hello world');
  }
   getUser()

// excercise 2
const whatISay = function(){
    console.log('Today is Friday!');
}

// excercise 3
const printNumber = function(){
      for (let n=0; n <= 100; n++) //do I need 'let'
      console.log(n);
  }
  printNumber()


// // excercise 4
let total = 0
const finalValue = function(){
    for(let i = 0; i <= array.length; i++){
    total = total + array[i] 
    }
console.log(total);
}
finalValue = [2,4,5,6] 

// // excercise 5
let students= [
    'Alice',
    'Andrew',
    'Casey',
    'Damian',
    'Grant',
    'Howie',
    'Wade',
    'Kat',
    'Kimbrad',
    'Kiu',
    'Natasha',
    'Obi',
    'Pedro',
    'Sarah',
    'Scott',
    'Tiffany',
    'Zhe',
  ]
 printName = function(studentsArray){
    for (let i = 0; i <= studentsArray.length; i++){
    console.log(`${studentsArray[i]}` + ' in WDI');
}
    }
printName(students)

excercise 6  
let array = ['i','am','the','best']
const printLength = function(arr){
    let  newarr = []
    for (let i=0; i<=array.length; i++){
        console.log(newarr.push(array[i].length))}
    console.log(newarr);
    }

printLength(array)

excercise 7 
const productPower = function(a,b,c){
    console.log(a*b^c);
}
productPower(2,3,4)

Bonus 1 
const printEven = function(){
    for(let n = 0; n <= 100; n = n + 2){
        console.log(n);
}
printEven()