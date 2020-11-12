let result=undefined;
let num1=undefined;
let num2=undefined;

const digital1 = document.querySelector('.first_operation');
const digital2 = document.querySelector('.second_operation');
const operationBtn = document.querySelectorAll('.operation');
const numBtn = document.querySelectorAll('.num');

document.querySelector('.enter').addEventListener('click',()=>{calc();});
document.querySelector('.toggler').addEventListener('click', ()=>{toggle();});
document.querySelector('.del').addEventListener('click', ()=>{del();});

numBtn.forEach(x => {
    x.addEventListener('click', ()=>{setDigit2(x.innerText);})
});

operationBtn.forEach(x => {
    x.addEventListener('click', ()=>{setDigit1(x.innerText);})
});


function setDigit2(nr){

        if(nr === '.' && (digital2.innerText.includes('.') || digital2.innerText ==='')) return;
        else if (nr === '0' && digital2.innerText=== '0') return;
        else digital2.innerText += nr;
}

function setDigit1(operation){
    
    calc();

     if( digital2.innerText !== ''){

            num1 = parseFloat(digital2.innerText);
            digital1.innerText = digital2.innerText+operation;
            digital2.innerText= '';

    }
}
function calc(){

    if(digital1.innerText !=='' && digital2.innerText !== '')
    {
        num2 = parseFloat(digital2.innerText)

        switch(digital1.innerText.substr(-1)){

            case '+': result = num1 + num2; break;
            case '-': result = num1 - num2; break;
            case '×': result = num1 * num2; break;
            case '÷': if(num2 !== 0){
                         result = num1 / num2; 
                      }           
                     else {
                        result = "Do not divide by 0"
                      }
            break;
            case '%': result = num1/100 * num2; break;
            case '^': result = Math.pow(num1,num2); break;
            case '√': result = Math.pow(num2,1/num1); break;

        }

        digital2.innerText = result.toString();
        digital1.innerText = '';

    }


}
function toggle(){

  digital1.innerText = '';
  digital2.innerText = '';
}

function del(){
    digital2.innerText = digital2.innerText.slice(0,-1);
}