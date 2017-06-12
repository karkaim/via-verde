    <?php
/*
 Template Name: Home
 */
$ajaxload = false;

if(isset($_GET['ajaxload']))
    $ajaxload = $_GET['ajaxload'];

if($ajaxload == false)
    get_header();
?>

<section class="section-home" id="home-inicio"></section>
<section class="section-home" id="home-que-es"></section>
<section class="section-home" id="home-beneficios"></section>
<section class="section-home" id="home-caracteristicas"></section>
<section class="section-home" id="home-instalacion"></section>
<section class="section-home" id="home-mantenimiento"></section>
<section class="section-home" id="home-footer">
	<ul>
		<li>
			
		</li>
		<li>
			
		</li>
		<li>
			<span class="copyright">Todos los derechos reservados <?php echo date('Y'); ?></span>
		</li>
	</ul>
</section>



<?php     if($ajaxload == false)get_footer(); ?>