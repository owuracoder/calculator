function add(num1,num2){
    return num1 + num2
}

function subtract(num1,num2){
    return num1 - num2
}

function multiply(num1,num2){
    return num1 * num2
}

function divide(num1,num2){
    return num1/num2
}

function operate(operator,num1,num2){
    if(operator == 'fa-plus'){
       return add(num1,num2)
    }else if(operator == 'fa-minus'){
        return subtract(num1,num2)
    } else if(operator == 'fa-times'){
        return multiply(num1,num2)
    } else if(operator == 'fa-divide'){
        return divide(num1,num2)
    }
}

function convInt(numbers){
    let num = parseFloat(numbers)
    screen.textContent = ''
    return num
}

function showNum(numb){
    numbers += numb.target.innerText
    screen.classList.add('screenh2')
    screen.textContent = numbers
}

function reSet(opera){
    numbers = ''
    operand = opera
}

function clearActive (){
    for(let i = 0; i < buttons.length; i++){
        if(buttons[i].classList.contains('active')){
            let activeBut = buttons[i]
            activeBut.classList.remove('active')
        }  
    }
}

function handler(e){
     
    showNum(e) 
    if(e.target.id == 'dot'){
        dotCounter--
        if(dotCounter == 1){
            dot.removeEventListener('click',handler)
        }
    } 
                
    if(operaTag.includes(e.target.classList[1])){
         dot.addEventListener('click',handler)
         dotCounter = 2

         clearActive()
        
         let selButton = e.target.parentElement
         selButton.classList.add('active')


        if(numbers == ''){
            numbers = 0
        }else  if(num1 == null){
            num1 = convInt(numbers)
            operaContainer = e.target.classList[1]
            reSet(operaContainer)
        }  else if(num1 != null){
            num2 = convInt(numbers)      
            let result = parseFloat(operate(operand,num1,num2).toFixed(2))
            num1 = result
            operaContainer = e.target.classList[1]
            reSet(operaContainer)  
        }
    } else if(e.target.classList[1] == 'clr' || e.target.classList[1] == 'fa-backspace')  {
        
        let splitted = numbers.split('')
        
        splitted.pop()
           
        let newText = splitted.join('')

        if(splitted.length == 0){
            dotCounter = 2
            dot.addEventListener('click',handler)
        }
        numbers = newText
        screen.classList.add('screenh2')
        screen.textContent = newText
    } else if(e.target.classList[1] == 'fa-power-off'){
        clearActive()
        screen.textContent = ''
        num1 = null
        num2 = null
        numbers = ''
        operand = ''
        operaContainer = ''
    }else if(e.target.classList[1] == 'fa-equals'){
        clearActive()
        
        if(operand == ''){
            screen.textContent = numbers
        } else if(numbers == ''){
            screen.textContent = ''
        }
         else{
            num2 = convInt(numbers)
            let result = parseFloat(operate(operand,num1,num2).toFixed(2))
            screen.textContent = result
            numbers = result
            num1 = null
            num2 = null
        }

    }
}

function calculator(){
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click',handler)
       
    }
}


let screen = document.querySelector('.screen')
let num1 = null;
let num2 = null;
let dotCounter = 2;
let numbers = ''
let operand = ''
let operaContainer = ''
let operaTag = ['fa-divide','fa-times','fa-minus','fa-plus']
let buttons = document.querySelectorAll('.button')
let dot = document.querySelector('#dot')

calculator()

