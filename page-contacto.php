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
            
           <div id="footerLogo"></div>
           <?php

             $args = array(
               'post_type' => 'contacto_footer',
               'hide_empty' => false,
               'posts_per_page' => 3,
             );
             $the_query = new WP_Query( $args );

             if ( $the_query->have_posts() ) : ?>
             <ul>
             <?php
                 while ( $the_query->have_posts() ): $the_query->the_post(); ?>
				<li>
					<div class="contactTitle"><?php the_title(); ?></div>
					<div class="contactContent"><?php the_content(); ?></div>
				</li>
			<?php endwhile; ?>
			</ul>
		<?php endif; ?>
		

    </article>

  <?php

  endwhile; else: ?>

    <p>Sorry, no pages matched your criteria.</p>

<?php
  endif;

  if($ajaxload == false)get_footer(); 
?>