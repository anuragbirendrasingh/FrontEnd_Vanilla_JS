const input = document.getElementById('input');
console.log("Anu");

let timerId ;
input.addEventListener('input',manageTyping);
//assume that user is searching something from the db
// api.db 
function manageTyping(e){
     let value = e.target.value ;
     // remove the old timer
     clearTimeout(timerId);

     timerId = setTimeout(()=>{
        // fetch("api.db");
        if(value==""){
            return ;
        }
        console.log("timeout cleared after 300 sec of typing" ,value);
        
     },300)
}