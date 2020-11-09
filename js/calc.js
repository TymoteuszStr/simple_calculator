var digital = document.querySelector('.result');
var num = document.querySelectorAll('button');

var btn_names = [];

for (i = 0; i < num.length; i++) {
    btn_names[i] = num[i].name;
}


for (i = 0; i < num.length; i++){
    var r = num[i].name; 
    num[i].addEventListener("click", event =>{       
        calc( event.target.name );
    });
}

function calc(nr){

        console.log(nr);
    
}