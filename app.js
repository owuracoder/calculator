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

let screen = document.querySelector('.screen')


let num1 = 0;

let num2 = 0;

let numbers = ''
let operand = ''
let operaContainer = ''
let operaTag = ['fa-divide','fa-times','fa-minus','fa-plus']

let buttons = document.querySelectorAll('.button')

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click',function(e){
         
        showNum(e)
        if(operaTag.includes(e.target.classList[1])){
            num1 = convInt(numbers)
            operaContainer = e.target.classList[1]
            reSet(operaContainer)
        } else if(e.target.classList[1] == 'clr' || e.target.classList[1] == 'fa-backspace')  {
            
            let strArr = parseFloat(screen.textContent)

            let stringArr = String(strArr)
            let splitted = stringArr.split('')
                splitted.pop()
               
            let newText = splitted.join('')
            if(newText == 'Na'){
                newText = ''
            }
            numbers = newText
            screen.classList.add('screenh2')
            screen.textContent = newText
        } else if(e.target.classList[1] == 'fa-power-off'){
            screen.textContent = ''
            num1 = 0
            num2 = 0
            numbers = ''
            operand = ''
            operaContainer = ''
        }
         else if(e.target.classList[1] == 'fa-equals'){
                    num2 = convInt(numbers)
                    let result = parseFloat(operate(operand,num1,num2).toFixed(2))
                    screen.textContent = result
                    numbers = ''
                 

        }
    })
}

// let clrBtn = document.querySelector('.clr')


// clrBtn.addEventListener('click',function(){
    
//     // let strArr = parseInt(screen.textContent)
//     // let stringArr = String(strArr)
//     // let splitted = stringArr.split('')
//     // splitted.pop()
//     // let newText = splitted.join('')
    
// })

// document.addEventListener('click',function(e){
    
//     numbers += e.target.innerText
//     screen.classList.add('screenh2')
//     screen.textContent = numbers
    
    // if(e.target.classList[1] == 'fa-divide'){
    //     console.log('divide fired')
    //     num1 = convInt(numbers)
    //     numbers = ''
    //     operand = 'fa-divide'
        // if(e.target.classList[1] == 'fa-equals'){
        //     num2 = convInt(numbers)
        //     let result = parseFloat(operate('fa-divide',num1,num2).toFixed(2))
        //     screen.textContent = result
        // }
    // }else if(e.target.classList[1] == 'fa-times'){
//         num1 = convInt(numbers)
//         numbers = ''
//         operand = 'fa-times'
//     }else if(e.target.classList[1] == 'fa-minus'){
//         num1 = convInt(numbers)
//         numbers = ''
//         operand = 'fa-minus'
//     } else if(e.target.classList[1] == 'fa-plus'){
//         num1 = convInt(numbers)
//         numbers = ''
//         operand = 'fa-plus'
//     }
    //  else if(e.target.classList[1] == 'fa-equals'){
    //     num2 = convInt(numbers)
    //     numbers = ''
    //     console.log('num2',num2)
    //     let result = parseFloat(operate(operand,num1,num2).toFixed(2))
    //     console.log(result)
    //     screen.textContent = result
    // } else if(e.target.classList[1] == 'clr'){
//         console.log('i got you')
//         screen.textContent = 'I got you'
//     }
// })