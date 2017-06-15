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
<section class="section-home es" id="home-que-es"></section>
<section class="section-home es" id="home-beneficios"></section>
<section class="section-home es" id="home-caracteristicas"></section>
<section class="section-home es" id="home-instalacion"></section>
<section class="section-home es" id="home-mantenimiento"></section>
<section class="section-home es" id="home-contacto"></section>

<div id="secondaryContent" style="display: none;">
	<div id="closeContent"></div>
	<div id="single-post-container"></div>
</div>

<ul>
	<li>
		<span class="copyright">Todos los derechos reservados <?php echo date('Y'); ?></span>
	</li>
</ul>
</section>



<?php     if($ajaxload == false)get_footer(); ?>