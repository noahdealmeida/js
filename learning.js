console.log("Hello world!")

//console.log("x:",x.value)

addValues=function(a,b){
    // parseFload just in case a and b being passed as strings
    return parseFloat(a)-parseFloat(b)
}

x.onkeyup=y.onkeyup=function(){
   z.textContent= addValues(x.value,y.value)
}