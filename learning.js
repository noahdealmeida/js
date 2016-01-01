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

operation.onchange=function(){
    console.log('operation selected:',operation.value)
}

x5.onkeyup=y5.onkeyup=operation.onchange=function(){
   var x = parseFloat(x5.value)
   var y = parseFloat(y5.value)
   if(typeof(window[operation.value])=='function'){
        z5.textContent= window[operation.value](x,y)
   }
  
}



addition=function(a,b){   
    return parseFloat(a)+parseFloat(b)
}

multipication=function(a,b){
    
    return parseFloat(a)*parseFloat(b)
}




Divide=function(a,b){    
    return parseFloat(a)/parseFloat(b)
}



Percent=function(a,b,c){
    a=parseFloat(a)
    b=parseFloat(b)
    return Math.floor(a/b)+' '+a%b+'/'+b
}




TESTER = document.getElementById('uFool');

Plotly.plot( TESTER, [{
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 4, 8, 16] }], { 
    margin: { t: 0 } } );

console.log( Plotly.BUILD );

// NEO - Near Earth Object ploting so we may survive

Plotly.d3.json("https://data.nasa.gov/resource/b67r-rgxc.json",function(x){
    // ploting e vs w_deg
    var e=[]
    var w_deg=[]
    for(var i=0 ; i<x.length; i++){
        e[i]=parseFloat(x[i].e)
        w_deg[i]=parseFloat(x[i].w_deg)
    }
    Plotly.plot( e_vs_w_deg,
        [{
            x: e,
            y: w_deg,
            mode: 'markers',
            type: 'scatter'  
         }], 
         { 
            margin: { t: 0 },
            title:'Near Earth Objects Data from NASA',
            xaxis: {title: 'e (name and unit of this variable)'},
            yaxis: {title: 'w_deg (name and unit of this variable)'}
         } 
    )
    
    
})


Plotly.d3.json("https://data.nasa.gov/resource/b67r-rgxc.json",function(x){
   
    var e=[]
    var moid_au=[]
    for(var i=0 ; i<x.length; i++){
        e[i]=parseFloat(x[i].e)
        moid_au[i]=parseFloat(x[i].moid_au)
    }
    Plotly.plot( e_vs_moid_au,
        [{
            x: e,
            y: moid_au,
            mode: 'markers',
            type: 'scatter'  
         }], 
         { 
            margin: { t: 0 },
            title:'Near Earth Objects Data from NASA they make hit you at anytime!!',
            xaxis: {title: 'e (name and unit of this variable/letter)'},
            yaxis: {title: 'moid_au (name and unit of this variable)'}
         } 
    )
})    
  
    
