const calcuatorScreen = document.querySelector('.calculator-screen')
let prevInput = '0'
let calculationOperator = ''
let currentInput = "0"

const updateScreen = ()=>{
  calcuatorScreen.value = currentInput
}

const numbers = document.querySelectorAll('.number')

 numbers.forEach((number) => {
   number.addEventListener("click", () =>{
     inputNumber(event.target.value)
      updateScreen(currentInput)
      console.log(event.target.value)
   })
 })




const inputNumber = (number)=>{
  if(currentInput === "0"){
    currentInput = number
  }
  else{
    currentInput += number
  }
}

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
  operator.addEventListener("click",(event)=>{
    inputOperator(event.target.value)
  })

})

const inputOperator = (operator)=>{
  prevInput = currentInput
  calculationOperator = operator
  currentInput = '0'
}



const calculate = ()=>{
  let result = 0
  switch(calculationOperator){
    case '+':
    result = parseInt(prevInput) + parseInt(currentInput)
    break
    case '-':
    result = parseInt(prevInput) - parseInt(currentInput)
    break
    case '/':
    result = parseInt(prevInput) / parseInt(currentInput)
    break
    case '*':
    result =parseInt(prevInput) * parseInt(currentInput)
    break

    default:
    return
}
currentInput = result.toString()
calculationOperator = ''
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click',()=>{
  calculate()
  updateScreen(currentInput)
})



const clearAll = ()=>{
  prevInput = '0'
  calculationOperator = ''
  currentInput = '0'
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', ()=>{
  clearAll()
  updateScreen(currentInput)
})

document.addEventListener('keydown',(event)=>{
  let key = event.key
  console.log(key);
  if(Number(key)>=0 && Number(key)<=9){
  inputNumber(key)
  updateScreen()
}
})
