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
        activeImg.removeClass('active');
        activeImg.next('img').addClass('active');

        if (activeImg.hasClass('last')){
            $('img.first').addClass('active');
        }
        else {
            activeImg.next('img').addClass('active');
        };
    };

    function prevImage(){
        var activeImg = $('img.active');
        activeImg.removeClass('active');
        activeImg.prev('img').addClass('active');

        if (activeImg.hasClass('last')){
            $('img.first').addClass('active');
        }
        else{
            activeImg.prev('img').addClass('active');
        };
       
    };

    