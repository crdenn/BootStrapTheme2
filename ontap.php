<?php
/* 
Template Name: On the Taps
*/
get_header(); ?>

<div class="contain">
<div class="container">	
<div id="content" class="clearfix row">		
	<div id="main" class="col col-sm-12 clearfix" role="main">


<?php while ( have_posts() ) : the_post(); ?>

<div id="archTop">	
<div id="entry-content">		
<?php the_content(); ?>
</div>			 
	<p id="seeMore">
		<i class="fa fa-arrow-down"></i>
		Check out our current selection. 
		<i class="fa fa-arrow-down"></i>			
	</p>



</div><!-- #archTop -->




<?php endwhile; // end of the loop. ?>

<div class="entry-title masonFade"><?php the_title(); ?></div>


<div id="container" class="js-masonry" style="margin-top: 40px;">
<?php $my_query = new WP_Query('post_type=onTheTaps');
  while ($my_query->have_posts()) : $my_query->the_post();
  $do_not_duplicate = $post->ID;?>
	<div class="grid-sizer"></div>
	<div class="item">
		<div class="panel panel-default masonFade">		
					<article id="post-<?php the_ID(); ?>" <?php post_class('clearfix'); ?> role="article">
						<div class="panel-header">
	
								<center><h3 class="h3box"><?php the_title(); ?></h3></center>
																				
						</div>
				<div class="panel-mid">
				<center><span class="label label-default">
				<?php echo strip_tags(get_the_tag_list('',', ','')); ?>
				</span></center>				
				</div>
				
						<div class="panel-body">
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