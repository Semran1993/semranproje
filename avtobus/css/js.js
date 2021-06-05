 $(document).ready(function() {
     // app yazi teyip
     var typed = new Typed("#yazdir", {
             strings: ["planlı", "etkin", "Şık", " interaktif ", "hızlı"],
             typeSpeed: 150,
             backSpeed: 90,
             loop: true
         })
         // arama gedis donus
     $("#gidis").click(function() {
         $(".donus").hide();
     });
     $("#gidis-donus").click(function() {
         $(".donus").show();
     });

 });