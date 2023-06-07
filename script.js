$(function () {
    
    $('.item').click(function () {
        
        $(this).addClass("active").siblings('.item').removeClass('active');
        
        $(this).next().show().animate({width: '280px'}).siblings('.info').animate({width: 0}, function () {
            
            $(this).hide();
            
        });
        
    });

    $('.btndj').click(function () {
        $('.item.a').click();
    });
    $('.btnvd').click(function () {
        $('.item.b').click();
    });
    $('.btnie').click(function () {
        $('.item.c').click();
    });
    $('.btnja').click(function () {
        $('.item.d').click();
    });
    $('.btnzh').click(function () {
        $('.item.e').click();
    });
    
});

