$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
    });


    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing annimation script
    var typed = new Typed(".typing", {
        strings: ["Student", "Developer", "Tech Enthusiast, Robotics"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    var typed = new Typed(".typing-2", {
        strings: ["Student", "Developer", "Tech Enthusiast, Robotics"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    // owl-carousel script
    $('.carousel').owlCarousel({
      margin: 20,
      loop: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
          0:{
              items: 1,
              nav: false
          },
          600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        },
      }

    });

});

// popup script
window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.
            display = "block";
        },
        1000
    )
});

document.querySelector("#cut").addEventListener
("click", function(){
    document.querySelector(".popup").style.display = "none" 
});
