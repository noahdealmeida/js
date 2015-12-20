console.log("Hello world!")

//console.log("x:",x.value)

addValues=function(a,b){
    // parseFload just in case a and b being passed as strings
    return parseFloat(a)+parseFloat(b)
}

subtractValues=function(a,b){
    // parseFload just in case a and b being passed as strings
    return parseFloat(a)-parseFloat(b)
}

x.onkeyup=y.onkeyup=function(){
   z.textContent= addValues(x.value,y.value)
}

x2.onkeyup=y2.onkeyup=function(){
   z2.textContent= subtractValues(x2.value,y2.value)
}

MultiValues=function(a,b){
    
    return parseFloat(a)*parseFloat(b)
}

x3.onkeyup=y3.onkeyup=function(){
   z3.textContent= MultiValues(x3.value,y3.value)
}

DivideValues=function(a,b){
    
    return parseFloat(a)/parseFloat(b)
}

x4.onkeyup=y4.onkeyup=function(){
   z4.textContent=DivideValues(x4.value,y4.value)
}