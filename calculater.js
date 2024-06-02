const buttons = document.querySelectorAll('button');

const  display = document.querySelector('.display');

buttons.forEach(function(button){
    buttons.addEventListener('click',Calculater)
});

function Calculater(event){
const clickbuttobvalue = event.target.value;
if (clickbuttobvalue === "=") {
    if (display.value !== '') {
        display.value = eval(display.value);
    }
}else if (clickbuttobvalue === "C") {
    display.value =''
}else 
!{display.value+=clickbuttobvalue;}
}