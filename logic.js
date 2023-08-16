let rightbox = document.getElementById('right');
let leftbox = document.getElementById('left');
let divlist =  document.getElementsByClassName('item');



for(lists of divlist){

   lists.addEventListener('dragstart' , function(e){

    let selected = e.target;

    leftbox.addEventListener('dragover' , function(e){

        e.preventDefault();
       })

     leftbox.addEventListener('drop' , function(){

        leftbox.appendChild(selected);
        selected =  null;
     })  



     
    rightbox.addEventListener('dragover' , function(e){

        e.preventDefault();
       })

     rightbox.addEventListener('drop' , function(){

        rightbox.appendChild(selected);
        selected =  null;
     })

    })
   }