document.querySelector('#bar').addEventListener('click', ()=> {
    var x = document.querySelector('.bar_content');
    if (x.style.display === 'none'){
       x.style.display = 'flex';   
    }
    else{
       x.style.display = 'none';   
    }
}); 

document.body.addEventListener('click', function(evt){
   x.style.display = 'none';
}); 