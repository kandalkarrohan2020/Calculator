let inp = document.querySelector("input");



let string = "";

let equal = document.querySelector(".equal");
let del = document.querySelector(".delete");
let zero = document.querySelector(".zero");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let divide = document.querySelector(".divide");
let mult = document.querySelector(".mult");
let ac = document.querySelector(".AC");
let point = document.querySelector(".point");
let avg = document.querySelector(".avg");
let rotate = document.querySelector(".rotate");

rotate.addEventListener("click",function (){
    let str = inp.value;
    let restr = Array.from(str).reverse().join("");
    inp.value = restr;
   
});


avg.addEventListener("click",function (){
    inp.value += '%';
   
});

point.addEventListener("click",function (){
    inp.value += '.';
   
});


mult.addEventListener("click",function (){
    inp.value += '*';
   
});


divide.addEventListener("click",function (){
    inp.value += '/';
   
});


minus.addEventListener("click",function (){
    inp.value += '-';
   
});


plus.addEventListener("click",function (){
    inp.value += '+';
   
});


nine.addEventListener("click",function (){
    inp.value += 9;
    
});

eight.addEventListener("click",function (){
  
    inp.value += 8;
    
});

seven.addEventListener("click",function (){
   
    inp.value += 7;

});
six.addEventListener("click",function (){
 
    inp.value += 6;
   
});
five.addEventListener("click",function (){
    
    inp.value += 5;
  
});
four.addEventListener("click",function (){
    
    inp.value += 4;
  
});
three.addEventListener("click",function (){

    inp.value += 3;
  
});
two.addEventListener("click",function (){
   
    
    inp.value += 2;
});
one.addEventListener("click",function (){
    
    inp.value += 1;
   
});

zero.addEventListener("click",function (){
    
    inp.value += 0;
   
});

equal.addEventListener("click",function (){
    inp.value = eval(inp.value);
});

del.addEventListener("click",function (){
    let string = inp.value.slice(0,-1);
    inp.value = string;
   
   
});

ac.addEventListener("click",function (){
    inp.value = "";
   
});


 




