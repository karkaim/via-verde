<?php

  /**
  *@desc A page. See single.php is for a blog post layout.
  */

  $ajaxload = false;

if(isset($_GET['ajaxload']))
    $ajaxload = $_GET['ajaxload'];

if($ajaxload == false)
    get_header();

  if (have_posts()) : 
  
  $term_id = get_queried_object()->term_id;
  $term = get_term( $term_id );
  $termName = $term->name;
  echo '<h1 class="bloqueTitulo">'.$termName.'</h1>';

    while (have_posts()) : the_post();
  ?>

	<article class="postWrapper" id="post-<?php the_ID(); ?>">
      <img class="icon" src="<?php echo get_post_meta( get_the_ID(), 'icon', true ); ?>">
    <a class="greenCircle" href="<?php the_permalink(); ?>">+</a>

		<header>

        <a class="titleBlock" href="<?php the_permalink(); ?>">
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