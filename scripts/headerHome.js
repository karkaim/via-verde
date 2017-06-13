
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
    
    $(".menu-menu-1-container ul li a").click(function() {
                             
        var theId = $(this).parent().attr('id');
        //console.log('ID: '+theId);
        switch(theId){

        case "menu-item-27":
        $("html, body").animate({ scrollTop: $('#home-que-es').offset().top }, 1000);
        if ($(window).width() < 729) 
        	$('ul#menu-main-menu').fadeOut(); 
        break;
        case "menu-item-28":
        $("html, body").animate({ scrollTop: $('#home-beneficios').offset().top }, 1000);
        if ($(window).width() < 729) 
        	$('ul#menu-main-menu').fadeOut(); 
        break;
        case "menu-item-29":
        $("html, body").animate({ scrollTop: $('#home-caracteristicas').offset().top }, 1000);
        if ($(window).width() < 729) 
        	$('ul#menu-main-menu').fadeOut(); 
        break
        case "menu-item-33":
        $("html, body").animate({ scrollTop: $('#home-instalacion').offset().top }, 1000);
        if ($(window).width() < 729) 
        	$('ul#menu-main-menu').fadeOut(); 
        break;
        case "menu-item-34":
        $("html, body").animate({ scrollTop: $('#home-mantenimiento').offset().top }, 1000);
        if ($(window).width() < 729) 
        	$('ul#menu-main-menu').fadeOut(); 
        break;
        case "menu-item-30":
        $("html, body").animate({ scrollTop: $('#home-contacto').offset().top }, 1000);
        if ($(window).width() < 729) 
            $('ul#menu-main-menu').fadeOut(); 
        break;
        }

        $("ul#menu-main-menu li").removeClass("current-menu-item");
        $(this).parent().addClass("current-menu-item");
         
    });
    
    $(window).scroll( function(){
        //var posContact = $('#home-contact').offset().top;

        var scroll = $(window).scrollTop();

         if (scroll > 200) {
             $("body").addClass("change");
         } else {
             $("body").removeClass("change");
         }
       
    }); 





});
