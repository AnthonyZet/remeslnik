const changeImage = (src) =>{
    document.getElementById("main").src = src;
}

$(document).ready(function() {
  $('.hamburgerMenu').click(function(){
    $('.hamburgerMenu').fadeOut()/*.css({display: "none" })*/;
    $('.closeMenu, .nav-item').fadeIn(1000);
    

    $('.closeMenu,  .nav-item').click(function(){
        $('.closeMenu, .nav-item').fadeOut();
        $('.hamburgerMenu').fadeIn(1000);
    })
  })

  $('.flex-btn').click(function(){
    $('.gallery2').css({display: "block"});
})
  });