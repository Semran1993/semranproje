$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 20){
            $('.navbarr').addClass('.sticky'); 
        }else{
            $('.navbarr').removeClass('.sticky');
        }


        $('.deneyim,.ozhakkimda,.iletisim,#projeler').each(function() {
            var ustKenar = $(this).offset().top;
            var pencereAlt = $(window).scrollTop() + $(window).height();
            if (pencereAlt > ustKenar) {
                $(this).animate({ 'opacity': '1' }, 1000);
            }

        });
      
    });
   

    var typed = new Typed(".yazdir",{
        strings: [ "TASARIM", "KURGU", "WEP  YAZLIM "  ],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });
    var typed = new Typed(".yazdir1",{
        strings: [ " yazlımcısıyım,", " fotoğrafçıyım, " , " tasarımcıyım, "],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });

    $("a").click(function() {
        var adres = $(this).attr("href");
        if (adres != "") {
            $("html,body").animate({
                scrollTop: $(adres).offset().top
            }, 800);
        }

    });
    
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
    });
});

