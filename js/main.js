// const elsiteheading = document.querySelector('.site-heading');
// const elheaderbtn = document.querySelector('.header-btn');

// elheaderbtn.addEventListener('click', function(){
//   elsiteheading.textContent = "Choose the country"
// })
const elblackmode = document.querySelector('.black-mode');
const elheaderbtn = document.querySelector('.header-btn');

elheaderbtn.addEventListener('click', function(){
  document.body.classList.add('black-mode')
})
