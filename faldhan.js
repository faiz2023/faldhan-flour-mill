var nav = document.querySelector("nav1");
window.addEventListener('scroll',function(){
    if(window.pageYOffset >100){
        nav.classList.add('bg-secondary','shadow');
    }else{
        nav.classList.remove('bg-secondary','shadow');
}
});
// var navbar = document.querySelector('nav')

// window.onscroll = function() {

  // pageYOffset or scrollY
//   if (window.pageYOffset > 100) {
//     navbar.classList.add('scrolled')
//   } else {
//     navbar.classList.remove('scrolled')
//   } 
// }