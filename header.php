<!doctype html>  

<!--[if IEMobile 7 ]> <html <?php language_attributes(); ?>class="no-js iem7"> <![endif]-->
<!--[if lt IE 7 ]> <html <?php language_attributes(); ?> class="no-js ie6"> <![endif]-->
<!--[if IE 7 ]>    <html <?php language_attributes(); ?> class="no-js ie7"> <![endif]-->
<!--[if IE 8 ]>    <html <?php language_attributes(); ?> class="no-js ie8"> <![endif]-->
<!--[if (gte IE 9)|(gt IEMobile 7)|!(IEMobile)|!(IE)]><!--><html <?php language_attributes(); ?> class="no-js"><!--<![endif]-->
	
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<title><?php wp_title( '|', true, 'right' ); ?></title>	
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link href='http://fonts.googleapis.com/css?family=Headland+One' rel='stylesheet' type='text/css'>		
		<!-- media-queries.js (fallback) -->
		<!--[if lt IE 9]>
			<script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>			
		<![endif]-->
			<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
		<!-- html5.js -->
		<!--[if lt IE 9]>
			<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
  		<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
			

		<!-- wordpress head functions -->
		<?php wp_head(); ?>
		<!-- end of wordpress head -->
				
	</head>
	
	<body <?php body_class(); ?> data-spy="scroll" data-target="#navbar">

<!-- Jumbotron -->
<div id="banner">

	  <div id="fading" class="jumbotron">
	    
	      <div class="jumboBG">
	        <div class="logoBox">
	        <a href="<?php echo home_url(); ?>">
	         <img src="<?php bloginfo('template_directory'); ?>/images/bottlemixx.png" class="jumboLogo center-block">
	         </a>
	         <div class="indyStar">
	         		<img src="<?php bloginfo('template_directory'); ?>/images/indy.png">
	         </div>
	    	</div>
	    	</div>
	    </div>	

</div>

<!-- End Jumbotron -->				

	
		<div id="nav-wrapper">   	
			<div class="navbar navbar-default" id="nav" data-toggle="affix-top" data-spy="affix" data-offset-top="300">
                 <div class="container">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>

						<a class="navbar-brand" title="<?php echo get_bloginfo('description'); ?>" href="<?php echo home_url(); ?>"><?php bloginfo('name'); ?></a>
					</div>

					<div class="collapse navbar-collapse navbar-responsive-collapse">
						<?php wp_bootstrap_main_nav(); // Adjust using Menus in Wordpress Admin ?>

						<!--<?php //if(of_get_option('search_bar', '1')) {?>
						<form class="navbar-form navbar-right" role="search" method="get" id="searchform" action="<?php echo home_url( '/' ); ?>">
							<div class="form-group">
								<input name="s" id="s" type="text" class="search-query form-control" autocomplete="off" placeholder="<?php _e('Search','wpbootstrap'); ?>" data-provide="typeahead" data-items="4" data-source='<?php echo $typeahead_data; ?>'>
							</div>
						</form>
						<?php //} ?>-->
					</div>

				</div> <!-- end .container -->
			</div> <!-- end .navbar -->
		</div>
		


	
