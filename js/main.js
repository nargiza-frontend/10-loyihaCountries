const elblackmode = document.querySelector('.black-mode');
const elheaderbtn = document.querySelector('.header-btn');

elheaderbtn.addEventListener('click', function(){
  document.body.classList.toggle('black-mode')
})
// let isdark=false;

// elheaderbtn.addEventListener('click', function(){
//   if(isdark===false){
//     document.body.classList.add('black-mode');
//     isdark=true
//   }
//   else{
//     document.body.classList.remove('black-mode');
//     isdark=false
//   }
// })
