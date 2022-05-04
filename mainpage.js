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
    }
});
