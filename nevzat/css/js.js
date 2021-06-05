$(document).ready(function() {
    $(window).scroll(function() {
        $('.slayd, .bolum2, .bolum3, .bolum4, .bolum5, footer').each(function() {
            var ustKenar = $(this).offset().top;
            var pencereAlt = $(window).scrollTop() + $(window).height();
            if (pencereAlt > ustKenar) {
                $(this).animate({ 'opacity': '1' }, 1500);
            }

        })



    })

    $("a").click(function() {
        var adres = $(this).attr("href");
        if (adres != "") {
            $("html,body").animate({
                scrollTop: $(adres).offset().top
            }, 800);
        }

    });

    $('.carousel').carousel({
        interval: 2000
    })

    $("nav div").click(function() {
        $("ul").slideToggle();
    })


});