
$(document).ready(function(){
    console.log('test');
    var myURL = window.location.protocol + "//" + window.location.host + "/tests/viaverde/";
   
    var post_url0 = myURL+"inicio/?ajaxload=true";
    var post_url1 = myURL+"que-es/?ajaxload=false";
    var post_url2 = myURL+"beneficios/?ajaxload=false";
    var post_url3 = myURL+"caracteristicas/?ajaxload=false";
    var post_url4 = myURL+"instalacion/?ajaxload=false";
    var post_url5 = myURL+"mantenimiento/?ajaxload=false";
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
    
    
    $("ul#menu-main-menu li a").removeAttr("href");
    $("ul#menu-main-menu li#menu-item-62 a").html('&nbsp; &nbsp;');
    
    $("#menu-item-6, #menu-item-6-mobile").click(function() {
        $("html, body").animate({ scrollTop: $('#home-inicio').offset().top }, 1000);
    });

    $("#menu-item-7-mobile").click(function() {
        $('ul#menu-main-menu').fadeToggle();
    });

    $(window).resize(function() { 
    	if ($(window).width() > 729) 
    		$('ul#menu-main-menu').show(); 
    	});
    
    $(".menu-main-menu-container ul#menu-main-menu li a").click(function() {
                             
        var theId = $(this).parent().attr('id');
        //console.log('ID: '+theId);
        switch(theId){
        case "menu-item-6"://home
        $("html, body").animate({ scrollTop: $('#home-inicio').offset().top }, 1000);
        if ($(window).width() < 729) 
        	$('ul#menu-main-menu').fadeOut(); 
        break;
        case "menu-item-7"://about us
        $("html, body").animate({ scrollTop: $('#home-que-es').offset().top }, 1000);
        if ($(window).width() < 729) 
        	$('ul#menu-main-menu').fadeOut(); 
        break;
        case "menu-item-650"://Xtreme Activities
        $("html, body").animate({ scrollTop: $('#home-beneficios').offset().top }, 1000);
        if ($(window).width() < 729) 
        	$('ul#menu-main-menu').fadeOut(); 
        break;
        case "menu-item-3289"://Gallery
        $("html, body").animate({ scrollTop: $('#home-caracteristicas').offset().top }, 1000);
        if ($(window).width() < 729) 
        	$('ul#menu-main-menu').fadeOut(); 
        break
        case "menu-item-9"://Contact
        $("html, body").animate({ scrollTop: $('#home-instalacion').offset().top }, 1000);
        if ($(window).width() < 729) 
        	$('ul#menu-main-menu').fadeOut(); 
        break;
        case "menu-item-3290"://Contact
        $("html, body").animate({ scrollTop: $('#home-mantenimiento').offset().top }, 1000);
        if ($(window).width() < 729) 
        	$('ul#menu-main-menu').fadeOut(); 
        break;
        }

        $("ul#menu-main-menu li").removeClass("current-menu-item");
        $(this).parent().addClass("current-menu-item");
         
    });
    
    $(window).scroll( function(){
        var posScroll = $(window).scrollTop();
        //var posContact = $('#home-contact').offset().top;
       
    }); 



});
