$(document).ready(function() {

    var typed = new Typed(".yazdir1", {
        strings: ["TASARIM", "KURGU", "WEP  YAZLIM "],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


    $("a").click(function() {
        var adres = $(this).attr("href");
        if (adres != "") {
            $("html,body").animate({
                scrollTop: $(adres).offset().top
            }, 800);
        }

    });

});