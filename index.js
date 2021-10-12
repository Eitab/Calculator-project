var input=document.getElementById("input"); // to save the value of text
var btn0=document.getElementById("btn0");
var btn1=document.getElementById("btn1");//to save the value of btn1
var btn2=document.getElementById("btn2");
var btn3=document.getElementById("btn3");
var btn4=document.getElementById("btn4");
var btn5=document.getElementById("btn5");
var btn6=document.getElementById("btn6");
var btn7=document.getElementById("btn7");
var btn8=document.getElementById("btn8");
var btn9=document.getElementById("btn9");
var btnplus=document.getElementById("btnplus");
var btnmultip=document.getElementById("btnmultip");
var btnsub=document.getElementById("btnsub");
var btndivi=document.getElementById("btndivi");
var btnequal=document.getElementById("btnequal");
var btnreset=document.getElementById("btnreset");


btn0.addEventListener("click",function name(params) {
    zero()
})
function zero(){
    input.value=input.value+btn0.value;// to change the value of input to 1 when we click on btn1
}

btn1.addEventListener("click",function name(params) {
    one()
})
function one(){
    input.value=input.value+btn1.value;// to change the value of input to 1 when we click on btn1
}



btn2.addEventListener("click",function name(params) {
    two()
})
function two(){
    input.value=input.value+btn2.value;// to change the value of input to 2 when we click on btn1   
}


btn3.addEventListener("click",function name(params) {
    three()
})
function three(){
    input.value=input.value+btn3.value;
}

btn4.addEventListener("click",function name(params) {
    four()
})
function four(){
    input.value=input.value+btn4.value; 
}

btn5.addEventListener("click",function name(params) {
    five()
})
function five(){
    input.value=input.value+btn5.value;
}

btn6.addEventListener("click",function name(params) {
    six()
})
function six(){
    input.value=input.value+btn6.value;
}


btn7.addEventListener("click",function name(params) {
    seven()
})
function seven(){
    input.value=input.value+btn7.value;
}


btn8.addEventListener("click",function name(params) {
    eight()
})
function eight(){
    input.value=input.value+btn8.value; 
}

btn9.addEventListener("click",function name(params) {
    nine()
})
function nine(){
    input.value=input.value+btn9.value; 
}


btnmultip.addEventListener("click",function name(params) {
    Multiplications()
})
function Multiplications(){
    input.value=input.value+btnmultip.value;
}

btnplus.addEventListener("click",function name(params) {
    plus()
})
function plus(){
    input.value=input.value+btnplus.value;
}

btndivi.addEventListener("click",function name(params) {
    division()
})
function division(){
    input.value=input.value+btndivi.value;
}

btnsub.addEventListener("click",function name(params) {
    subtraction()
})
function subtraction(){
    input.value=input.value+btnsub.value;
}



btnequal.addEventListener("click",function name(params) {
    equal()
})

function equal(){
    input.value=eval(input.value);// eval accepts string('2+2') and retuns the sum 
}

btnreset.addEventListener("click",function name(params) {
    reset()
})

function reset(){
    input.value=" "; // eval accepts string('2+2') and retuns the sum 
}