const buttons =document.querySelectorAll('.buttons');

const body = document.querySelector('body');

console.log(buttons);

buttons.forEach(function(btnval){
btnval.addEventListener('click',function(e){
if(e.target.id === 'grey'){
    body.style.backgroundColor =e.target.id
}
if(e.target.id === 'red'){
    body.style.backgroundColor =e.target.id
}
if(e.target.id === 'blue'){
    body.style.backgroundColor =e.target.id
}
if(e.target.id === 'yellow'){
    body.style.backgroundColor =e.target.id
}
if(e.target.id === 'purple'){
    body.style.backgroundColor =e.target.id
}


})


})