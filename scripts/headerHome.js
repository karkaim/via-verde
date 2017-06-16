
$(document).ready(function(){
    
    var myURL = window.location.protocol + "//" + window.location.host + "/tests/viaverde/";
   
    var post_url0 = myURL+"inicio/?ajaxload=true";
    var post_url1 = myURL+"categorias_bloques/que-es/?ajaxload=false";
    var post_url2 = myURL+"categorias_bloques/beneficios/?ajaxload=false";
    var post_url3 = myURL+"categorias_bloques/caracteristicas/?ajaxload=false";
    var post_url4 = myURL+"categorias_bloques/instalacion/?ajaxload=false";
    var post_url5 = myURL+"categorias_bloques/mantenimiento/?ajaxload=false";
    var post_url6 = myURL+"contacto/?ajaxload=false";


    var post_url1i = myURL+"categorias_bloques/what-is-it/?lang=en&ajaxload=false";
    var post_url2i = myURL+"categorias_bloques/benefits/?lang=en&ajaxload=false";
    var post_url3i = myURL+"categorias_bloques/characteristics/?lang=en&ajaxload=false";
    var post_url4i = myURL+"categorias_bloques/installation/?lang=en&ajaxload=false";
    var post_url5i = myURL+"categorias_bloques/maintenance/?lang=en&ajaxload=false";

    $.ajaxSetup({cache:false});
    
    $("#home-inicio").load(post_url0, function(){
        $("#homeArrow").click(function() {
            $("html, body").animate({ scrollTop: $('#home-que-es').offset().top }, 1000);
        });
    });
    $("#home-que-es.es").load(post_url1,ajaxLoadBloques);
    $("#home-beneficios.es").load(post_url2,ajaxLoadBloques);
    $("#home-caracteristicas.es").load(post_url3,ajaxLoadBloques);
    $("#home-instalacion.es").load(post_url4,ajaxLoadBloques);
    $("#home-mantenimiento.es").load(post_url5,ajaxLoadBloques);
    $("#home-contacto").load(post_url6);

    $("#home-que-es.en").load(post_url1i,ajaxLoadBloques);
    $("#home-beneficios.en").load(post_url2i,ajaxLoadBloques);
    $("#home-caracteristicas.en").load(post_url3i,ajaxLoadBloques);
    $("#home-instalacion.en").load(post_url4i,ajaxLoadBloques);
    $("#home-mantenimiento.en").load(post_url5i,ajaxLoadBloques);
    
    
    $('.menu-menu-1-container ul li a').click(function(e){e.preventDefault();});
    
    $("#homeLogo").click(function() {
        $("html, body").animate({ scrollTop: $('#home-inicio').offset().top }, 1000);
    });

    function ajaxLoadBloques(){

        $(".es a.titleBlock, .es a.greenCircle, a.nosotros.es").click(function(){
            //console.log('clicked');
            $.ajaxSetup({cache:false});
            var post_url = $(this).attr("href")+"?ajaxload=false";
            var link_id = $(this).attr('id');
            
            $("#secondaryContent").fadeOut();
            $("#single-post-container").load(post_url, function(){$("#secondaryContent").fadeIn('fast');});
            $("body").addClass("openwindow");
            return false;
        });

        $(".en a.titleBlock, .en a.greenCircle, a.nosotros.en").click(function(){
            //console.log('clicked');
            $.ajaxSetup({cache:false});
            var post_url = $(this).attr("href")+"&ajaxload=false";
            var link_id = $(this).attr('id');
            
            $("#secondaryContent").fadeOut();
            $("#single-post-container").load(post_url, function(){$("#secondaryContent").fadeIn('fast');});
            $("body").addClass("openwindow");
            return false;
        });
    }

    $('#closeContent').click(function(){
        $("#secondaryContent").fadeOut('fast',function(){
            $("#single-post-container").empty();
            $("body").removeClass("openwindow");
        });
            
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
    
    $('#menu-menu-1 a, #menu-menu-ingles a').each(function() {
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
        $('#menu-menu-1 a, #menu-menu-ingles a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top - 145 <= scrollPos && refElement.position().top - 14 + refElement.height() > scrollPos) {
                $('#menu-menu-1 a, #menu-menu-ingles a').removeClass("select");
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
