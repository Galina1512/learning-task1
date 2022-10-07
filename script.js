const comment = document.querySelectorAll('.comment');
const mynumber = document.querySelector('.mynumber');

let a = comment.length;
document.querySelector('.mynumber').innerHTML = a;

comment.forEach(item =>{
    item.addEventListener('click', () =>{
    item.classList.add('changecolor');
    a--;
    document.querySelector('.mynumber').innerHTML = a;
    if (a < 0){
        document.querySelector('.mynumber').innerHTML = 0;
 
    }  
});
});


const btn = document.querySelector('.btn');

btn.addEventListener('click', ()=>{
    // comment.length=0;
    comment.forEach(item =>{
    item.classList.add('changecolor');
    document.querySelector('.mynumber').innerHTML = 0;

})
})