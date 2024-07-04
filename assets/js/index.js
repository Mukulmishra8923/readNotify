
$('.cardCarousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    navText: [
        '<i class="custom-prev-icon"></i>',  // Custom HTML for previous button
        '<i class="custom-next-icon"></i>'   // Custom HTML for next button
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
        1200:{
            items:4
        }
    }
})

$('.testimonialCarousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    // autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        },
        1200:{
            items:3
        }
    }
})


// for sidebar
function openNav() {
    document.getElementById("mySidepanel").style.left = "0%";
  }
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.left = "100%";
  }
