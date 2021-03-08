$(document).ready(function(){
    $('.next').click(function(){
        nextImage();
    });
    $('.prev').click(function(){
        prevImage();
    });
});

    function nextImage(){
        var activeImg = $('img.active');
        var activeCircle = $('.nav i.active')

        activeImg.removeClass('active');
        activeCircle.removeClass('active');

        if (activeImg.hasClass('last')){
            $('img.first').addClass('active');
            $('i.first').addClass('active');
        }
        else {
            activeImg.next('img').addClass('active');
            activeCircle.next('i').addClass('active');
        };
    };

    function prevImage(){
        var activeImg = $('img.active');
        var activeCircle = $('.nav i.active');

        activeImg.removeClass('active');
        activeCircle.removeClass('active');

        if (activeImg.hasClass('last')){
            $('img.first').addClass('active');
            $('i.last').addClass('active');
        }
        else{
            activeImg.prev('img').addClass('active');
            activeCircle.prev('i').addClass('active');
        };
       
    };

    