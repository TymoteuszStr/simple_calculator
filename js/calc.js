let result=undefined;
let num1=undefined;
let num2=undefined;
let maxLenght = 20;
const digital1 = document.querySelector('.first_operation');
const digital2 = document.querySelector('.second_operation');
const operationBtn = document.querySelectorAll('.operation');
const numBtn = document.querySelectorAll('.num');

document.querySelector('.enter').addEventListener('click',()=>{calc();});
document.querySelector('.ac').addEventListener('click', ()=>{clear();});
document.querySelector('.del').addEventListener('click', ()=>{del();});
document.addEventListener('keypress', insertNum);
document.addEventListener('keydown', deleteNum);

document.querySelector(".toggler").addEventListener('click',()=>{tog();});
function tog(){
    document.querySelector('#style').href="style/main.css";
}

var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        resize();
    });    
  });

  var config = {childList: true};
  observer.observe(digital2, config);


  
numBtn.forEach(x => {
    x.addEventListener('click', ()=>{setDigit2(x.innerText);})
});

operationBtn.forEach(x => {
    x.addEventListener('click', ()=>{setDigit1(x.innerText);})
});


function setDigit2(nr){

    if(digital2.innerHTML.length < maxLenght){
        if(nr === '.' && (digital2.innerText.includes('.') || digital2.innerText ==='')) return;
        else if (nr === '0' && digital2.innerText=== '0') return;
        else digital2.innerText += nr;
    }
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
function clear(){

  digital1.innerText = '';
  digital2.innerText = '';

}

function del(){
    digital2.innerText = digital2.innerText.slice(0,-1);
}

function resize(){

    if(digital2.innerText.length >16) digital2.style.fontSize ="1.3em";
    else if(digital2.innerText.length <16) digital2.style.fontSize ="1.7em";
    
}

function insertNum(e) {
    
    if(e.which >=49 && e.which <= 58)  setDigit2((e.which%49 +1).toString());
    else if(e.which === 44 || e.which===46) setDigit2('.');
    else if(e.which === 48) setDigit2('0');
    else if(e.which === 43) setDigit1('+');
    else if(e.which === 45) setDigit1('-');
    else if(e.which === 47) setDigit1('÷');
    else if(e.which === 42) setDigit1('×');
    else if(e.which === 94) setDigit1('^');
    else if(e.which === 37) setDigit1('%');
    else if(e.which === 38) setDigit1('√');
    else if(e.which === 13) calc();
    else return;

  }
  function deleteNum(e)
  {
    
      if(e.code === 'Delete') clear();
      else if(e.code ==='Backspace') del();
  }