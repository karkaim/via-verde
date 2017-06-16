<!DOCTYPE HTML>
	<html <?php language_attributes(); ?>>

<head profile="http://gmpg.org/xfn/11">
	<meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable = yes" />
        
	<title><?php if(is_home()) bloginfo('name'); else wp_title(''); ?></title>

	<style type="text/css" media="screen">
		@import url( <?php bloginfo('stylesheet_url'); ?> );
                
                @import url( <?php bloginfo('template_url'); ?>/scripts/lightbox/css/lightbox.css );
	</style>
    <link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url'); ?>/fonts/font-awesome.css" />
	<link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="<?php bloginfo('rss2_url'); ?>" />
	<link rel="alternate" type="text/xml" title="RSS .92" href="<?php bloginfo('rss_url'); ?>" />
	<link rel="alternate" type="application/atom+xml" title="Atom 1.0" href="<?php bloginfo('atom_url'); ?>" />

	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
        
    <script src="http://code.jquery.com/jquery-latest.js"></script>
    <script type="text/javascript" src="<?php bloginfo('template_url'); ?>/scripts/headerHome.js"></script>
    <!--script src="http://malsup.github.com/jquery.cycle2.js"></script-->
        
	<?php
    wp_get_archives('type=monthly&format=link');
    wp_head();
  ?>
</head>

<body>
  <div id="canvas">
    <header id="navegacion">
        <div id="mobileMenu">
            <!-- Mobile Logo Here -->
        </div>
        <div id="headerlogo">
        <div id="homeLogo"><img id="logosmall" src="<?php echo get_template_directory_uri(); ?>/img/logo.png"></div>
        <?php if(ICL_LANGUAGE_CODE=='es'): ?>
            <a class="nosotros es" href="<?php echo esc_url( home_url( '/' ) ); ?>nosotros">Nosotros</a>
        <?php elseif(ICL_LANGUAGE_CODE=='en'): ?>
            <a class="nosotros en" href="http://frutabomba.com.mx/tests/viaverde/nosotros/?lang=en">About Us</a>
        <?php elseif(ICL_LANGUAGE_CODE=='fr'): ?>
            <a class="nosotros fr" href="http://frutabomba.com.mx/tests/viaverde/nosotros/?lang=fr">Qui sommes-nous</a>
         <?php endif;?>
        
        </div>
        <?php wp_nav_menu( array( 'theme_location' => 'main-menu' ) ); ?>
        <nav class="menu-idiomas">
        <?php if(ICL_LANGUAGE_CODE=='es'): ?>
            <a class="select" href="#">ESP</a><a href="<?php echo esc_url( home_url( '/' ) ); ?>?lang=en">ENG</a><a href="<?php echo esc_url( home_url( '/' ) ); ?>?lang=fr">FRA</a>
        <?php elseif(ICL_LANGUAGE_CODE=='en'): ?>
            <a href="http://frutabomba.com.mx/tests/viaverde/?lang=es">ESP</a><a class="select" href="#">ENG</a><a href="http://frutabomba.com.mx/tests/viaverde/?lang=fr">FRA</a>
        <?php elseif(ICL_LANGUAGE_CODE=='fr'): ?>
            <a href="http://frutabomba.com.mx/tests/viaverde/?lang=es">ESP</a><a href="http://frutabomba.com.mx/tests/viaverde/?lang=en">ENG</a><a class="select" href="#">FRA</a>
         <?php endif;?>
        </nav>
    </header>
 <div id="primaryContent">