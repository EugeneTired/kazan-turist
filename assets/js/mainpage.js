$(window).scroll(function() {
        if ($(window).scrollTop() > 10) {
            $('#button').addClass('show');
        } else {
            $('#button').removeClass('show');
        }
    });

    $('#button').on("click",function(){
        $(window).scrollTop(0);
    });
    $('#inpBut').on("focus",function(){
      $("#but").toggleClass('show');
    });


    const burgAnimation = () =>{
    burger.addEventListener('click',() =>{     
        path1.classList.toggle('cross');
        path2.classList.toggle('cross');
        mline.classList.toggle('hide');
       }
     )
 
 }
    var burger = document.querySelector('.svgburg')
    var path1 = document.querySelector('.path1')
    var path2 = document.querySelector('.path2')
    var mline = document.querySelector('.mline')
burgAnimation();

const toggleButton = document.querySelector('.toggle-button')
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const svgburg = document.getElementsByClassName('svgburg')[0];
const wrapper = document.querySelector(".wrapper");
const a = document.querySelector('.toggle-button');




svgburg.addEventListener('click',()=>{
  if(toggleButton.classList[1] != 'active'){
      toggleButton.classList.add('active');
      wrapper.style.opacity = 0.3;
      toggleButton.style.opacity = 1;
  } else {
      toggleButton.classList.remove('active');
      wrapper.style.opacity = 1;
      toggleButton.style.opacity = 0.4;
      toggleButton.animate({ opacity: "0" },400);
  }
});

toggleButton.addEventListener("click",()=>{
  if(toggleButton.classList[1] != undefined){
      toggleButton.classList.remove('active');
      wrapper.style.opacity = 1;
      toggleButton.style.opacity = 0.4;
      toggleButton.animate({ opacity: "0" },400); 
        path1.classList.toggle('cross');
        path2.classList.toggle('cross');
        mline.classList.toggle('hide');
  }     
});

$(document).ready(function(){


      $(".alert").click(function(){
          $(".toggle-button").fadeIn();
          return false;
      });

      $(".close").click(function(){
          $(".toggle-button").fadeOut();
          return false;
      });
  });


