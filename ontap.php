<?php
/* 
Template Name: On the Taps
*/
get_header(); ?>

<div class="contain">
<div class="container">
<div class="block">	
<div id="content" class="clearfix row">		
	<div id="main" class="col col-sm-12 clearfix" role="main">

<?php while ( have_posts() ) : the_post(); ?>
		


<div class="entry-content">

<?php the_content(); ?>

<center>
	<p>
		<i class="fa fa-arrow-down"></i>
		 Check out our current selection below. 
		<i class="fa fa-arrow-down"></i>

	</p>
</center>

</div><!-- .entry-content -->
</div>

<center><h1 class="entry-title row"><?php the_title(); ?></h1></center>
<?php endwhile; // end of the loop. ?>

<div id="container" class="js-masonry">
<?php $my_query = new WP_Query('post_type=onTheTaps');
  while ($my_query->have_posts()) : $my_query->the_post();
  $do_not_duplicate = $post->ID;?>
	<div class="grid-sizer"></div>
	<div class="item">
		<div class="panel panel-default">		
					<article id="post-<?php the_ID(); ?>" <?php post_class('clearfix'); ?> role="article">
						<div class="panel-header">
	
								<center><h3 class="h3box"><?php the_title(); ?></h3></center>
																				
						</div>
						
						<div class="panel-body">
							
							
					<span class="label label-default">
					<?php echo strip_tags(get_the_tag_list('',', ','')); ?>
					</span>
							
							<section class="post_content clearfix" itemprop="articleBody">
								
								<?php the_content(); ?>
								

							</section> <!-- end article section -->
						

					</div>
					</article> <!-- end article -->
		</div>
	</div>

  <?php endwhile; ?>
</div>
</div><!-- #content -->
</div><!-- #primary -->

<?php get_sidebar(); ?>

</div>
</div>
<?php get_footer(); ?>