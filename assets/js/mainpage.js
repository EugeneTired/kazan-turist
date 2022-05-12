$(window).scroll(function () {
    if ($(window).scrollTop() > 10) {
        $('#button').addClass('show');
    } else {
        $('#button').removeClass('show');
    }
});

$('#button').on("click", function () {
    $(window).scrollTop(0);
});

$('#inpBut').on("focus", function () {
    $("#but").add('show');
});
$('#inpBut').on("focusout", function () {
    $("#but").remove('show');
});

const burgAnimation = () => {
    burger.addEventListener('click', () => {
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
const svgburg = document.getElementsByClassName('svgburg')[0];
const wrapper = document.querySelector(".wrapper");
const a = document.querySelector('.toggle-button');


svgburg.addEventListener('click', () => {
    wrapper.style.opacity = toggleButton.classList[1] === 'active' ? 1 : 0.2;
    toggleButton.classList.toggle('active');
    let body = document.body;
    if(body.style.overflow != "hidden"){
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = "auto";
    }
});

toggleButton.addEventListener("click", () => {
    if (toggleButton.classList[1] !== undefined) {
        toggleButton.classList.remove('active');
        wrapper.style.opacity = 1;
        toggleButton.style.opacity = 0.2;
        toggleButton.animate({opacity: "0"}, 400);
        path1.classList.toggle('cross');
        path2.classList.toggle('cross');
        mline.classList.toggle('hide');   
        let body = document.body;
        if(body.style.overflow != "hidden"){
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = "auto";
        }
    }
});

document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
         wrapper.style.display = 'none';
         svgburg.style.visibility = 'hidden';
         document.body.style.background ='white';
    } else if (state == 'complete') {
        setTimeout(function(){
           document.getElementById('loader').style.display ="none";
           wrapper.style.display = 'grid';
           svgburg.style.visibility = 'visible';
           $('body').css({
            background: "-webkit-gradient(linear, 45% 40%, -20% 10%, from(rgb(102, 164, 23, 0.69)), to(rgb(221, 224, 21, 0.1)))" 
        });
        },1000);
    }
  }
