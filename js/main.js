

window.onload = function() {
 let nav = document.querySelector('.nav')
 let toggleCollapse =  document.querySelector('.toggle-collapse')
  toggleCollapse.addEventListener('click', function() {
    nav.classList.toggle('.collapse')
  })
}