<?php

  /**
  *@desc A page. See single.php is for a blog post layout.
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

        <a href="<?php the_permalink(); ?>">
		    <h1 class="postTitle"><?php the_title(); ?></h1>
        </a>

		</header>
      
		<section class="post">
      <?php the_excerpt(); ?>
      <div id="tumbnail">
          <?php 
          if ( has_post_thumbnail() ) 
              the_post_thumbnail('medium'); 
          ?>
      </div>
      
    </section>
		

    </article>

  <?php

  endwhile; else: ?>

    <p>Sorry, no pages matched your criteria.</p>

<?php
  endif;

  if($ajaxload == false)get_footer(); 
?>