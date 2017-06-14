<?php

  /**
  *@desc A single blog post See page.php is for a page layout.
  */

  $ajaxload = false;

if(isset($_GET['ajaxload']))
    $ajaxload = $_GET['ajaxload'];

if($ajaxload == false)
    get_header();


  if (have_posts()) : while (have_posts()) : the_post();
  ?>

	<article class="postWrapper" id="post-<?php the_ID(); ?>">

	<header>
	    <h1 class="postTitle"><?php the_title(); ?></h1>
      <h2><?php the_excerpt(); ?>
	</header>

      <section class="post"><?php the_content(__('(more...)')); ?></section>

	</article>

	<?php
  endwhile;
  endif;

  if($ajaxload == false)get_footer(); 
?>