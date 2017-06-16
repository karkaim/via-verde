    <?php
/*
 Template Name: Home Frances
 */
$ajaxload = false;

if(isset($_GET['ajaxload']))
    $ajaxload = $_GET['ajaxload'];

if($ajaxload == false)
    get_header();
?>

<section class="section-home" id="home-inicio"></section>
<section class="section-home fr" id="home-que-es"></section>
<section class="section-home fr" id="home-beneficios"></section>
<section class="section-home fr" id="home-caracteristicas"></section>
<section class="section-home fr" id="home-instalacion"></section>
<section class="section-home fr" id="home-mantenimiento"></section>
<section class="section-home fr" id="home-contacto"></section>

<div id="secondaryContent" style="display: none;">
	<div id="closeContent"></div>
	<div id="single-post-container"></div>
</div>
</section>



<?php     if($ajaxload == false)get_footer(); ?>