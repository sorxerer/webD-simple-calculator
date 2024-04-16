let inp = '';
let locate = document.querySelector('#innerscreen');

function include(num) {
    inp += num; 
    locate.innerHTML = inp; 
    
}

function clearScreen() {
    inp='';
    locate.innerHTML = '';
}

function delette(){
    inp =inp.slice(0 ,-1);    //1 character sliced out from back  
    locate.innerHTML= inp;
}

document.querySelector('.equals').addEventListener('click', function(){
    try {
        result = eval(inp).toFixed(8);   //eval here consider text as number and evaluate it
        result = Number(result);     
        locate.innerHTML = result;
        inp = result+ '';
    } catch (error) {
        // console.error(error);                          show error message in error format
        // alert('Error: ' + error.message);              error.message will return error main content 
        locate.innerHTML = 'Error';
        inp= '';
    } 

    //if error appears it execute catch , if no error appear it willexecute try , and at last finally method which going to execute on both conditions
}); 





                                                          //parse V/S FLoat
 
// console.log(parseFloat('3.14')); // Output: 3.14
// console.log(parseFloat('42 is the answer')); // Output: 42
// console.log(parseFloat('Hello, world!')); // Output: NaN
// console.log(Number('123')); // Output: 123
// console.log(Number('3.14 is nothing')); // Output: NAN
// console.log(Number('0xFF')); // Output: 255 (hexadecimal)
// console.log(Number('1e3')); // Output: 1000 (exponential notation)