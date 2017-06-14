<?php

  /**
  *@desc A page. See single.php is for a blog post layout.
  */

  $ajaxload = false;

if(isset($_GET['ajaxload']))
    $ajaxload = $_GET['ajaxload'];

if($ajaxload == false)
    get_header();

  
  ?>

	<article id="post-<?php the_ID(); ?>">
            
          <div id="post-home-video">
              <video muted autoplay loop id="bgvid">
                  <source src="<?php bloginfo('template_url'); ?>/video/VIAVERDE_WEB_HOME_FINAL.webm" type="video/webm">
                  <source src="<?php bloginfo('template_url'); ?>/video/VIAVERDE_WEB_HOME_FINAL.m4v" type="video/mp4">
                  <source src="<?php bloginfo('template_url'); ?>/video/VIAVERDE_WEB_HOME_FINAL.ogv" type="video/ogv">
              </video>
              <div id="homeArrow"></div>
          </div>

  </article>


<?php


  if($ajaxload == false)get_footer(); 
?>