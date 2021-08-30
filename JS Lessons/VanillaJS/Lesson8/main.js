// ES5 Functions

// function infoFunc (){
//     console.log("This is function");
// }
// function a (parametr){
//     // event 
// }

// let infoFunc = function(){
//     console.log("This is function");
// }

// infoFunc();

// function infoFunc(a=10,b=2){

//     return(a * b);

// }

// console.log(infoFunc(5,2));



// (function infoFunc (a=10,b=5){
//     console.log(a+b);
// })(3,1);


// infoFunc =()=>{
//     console.log("This is function");
// }
// infoFunc();


let myTime = (a)=>{
    if(a===5)
        while(a<10){
            // return a;
            console.log(a);
            a++;
            
        }
    else if(a===10)
        return 'Saat 10dur';
    else
        return 'melumat daxil edin';    
}

console.log(myTime(5));