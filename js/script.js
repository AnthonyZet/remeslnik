const changeImage = (src) =>{
    document.getElementById("main").src = src;
}
const changeImage2 = (src) =>{
  document.getElementById("main2").src = src;
}

const changeImage3 = (src) =>{
  document.getElementById("main3").src = src;
}

/*
Finished jobs gallery
*/
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})

/* --------------
CLOSE Menu
---------------- */
/*
function closeMenu(){
  const links  = document.querySelectorAll('.wrapper ul li');
  const checkbox = document.querySelector('#active');

  for(let link of links){
    link.addEventListener('click', function(){
      checkbox.click();
    })
  }

};
*/


$(document).ready(function() {

  $('.menu-btn').click(function(){
    $('section, footer').not('section:first-child').toggle();
    $('.showAllGallery').toggle().css({display: "none"});
    });

      $('.wrapper ul li').click(function(){
        $('section, footer').not('section:first-child').show();
        $('.showAllGallery').css({display: "block"});
        $('#active').click();
        
      });

  $('.hamburgerMenu').click(function(){
    $('.hamburgerMenu').fadeOut()/*.css({display: "none" })*/;
    $('.closeMenu, .nav-item').fadeIn(1000);
    

    $('.closeMenu,  .nav-item').click(function(){
        $('.closeMenu, .nav-item').fadeOut();
        $('.hamburgerMenu').fadeIn(1000);
    })
  })

  $('.flex-btn').click(function(){
   $('.showAllGallery').css({display: "block"});
})

$('[data-aos]').parent().addClass('hideOverflowOnMobile');
  });