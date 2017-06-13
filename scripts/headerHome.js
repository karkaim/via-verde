
$(document).ready(function(){
    
    var myURL = window.location.protocol + "//" + window.location.host + "/tests/viaverde/";
   
    var post_url0 = myURL+"inicio/?ajaxload=true";
    var post_url1 = myURL+"categorias_bloques/que-es/?ajaxload=false";
    var post_url2 = myURL+"categorias_bloques/beneficios/?ajaxload=false";
    var post_url3 = myURL+"categorias_bloques/caracteristicas/?ajaxload=false";
    var post_url4 = myURL+"categorias_bloques/instalacion/?ajaxload=false";
    var post_url5 = myURL+"categorias_bloques/mantenimiento/?ajaxload=false";
    var post_url6 = myURL+"contacto/?ajaxload=false";

    
    
    
    $.ajaxSetup({cache:false});
    
    //$("#home-inicio").load(post_url0, function(){ $('.cycle-slideshow').cycle();});
    $("#home-inicio").load(post_url0);
    $("#home-que-es").load(post_url1);
    $("#home-beneficios").load(post_url2);
    $("#home-caracteristicas").load(post_url3);
    $("#home-instalacion").load(post_url4);
    $("#home-mantenimiento").load(post_url5);
    $("#home-contacto").load(post_url6);
    
    
    $('.menu-menu-1-container ul li a').click(function(e){
        e.preventDefault();
    });

    //$("ul#menu-main-menu li a").removeAttr("href");
    
    
    $("#homeLogo").click(function() {
        $("html, body").animate({ scrollTop: $('#home-inicio').offset().top }, 1000);
    });

    //Mobile Open/Close
    $("#menu-item-7-mobile").click(function() {
        $('ul#menu-main-menu').fadeToggle();
    });

    //Show Menu after hidden on moobile
    $(window).resize(function() { 
    	if ($(window).width() > 729) 
    		$('ul#menu-main-menu').show(); 
    	});
    
    $('#menu-menu-1 a').each(function() {
        var href = $(this).attr('href');
        $(this).attr("href", "#home-" + href.match(/([^\/]*)\/*$/)[1]);

    });

    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top - 0
            }, 800);
            return false;
          }
        }
    });

    $(document).on("scroll", onScroll);
    function onScroll(event){
    var scrollPos = $(document).scrollTop();
        $('#menu-menu-1 a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top - 145 <= scrollPos && refElement.position().top - 14 + refElement.height() > scrollPos) {
                $('#menu-menu-1 a').removeClass("select");
                currLink.addClass("select");
            }
            else{
                currLink.removeClass("select");
            }
        });
    };
    
    $(window).bind('scroll load', function() {
        //var posContact = $('#home-contact').offset().top;

        var scroll = $(window).scrollTop();

         if (scroll > 200) {
             $("body").addClass("change");
         } else {
             $("body").removeClass("change");
         }
       
    }); 





});
