<?php get_header(); ?>
<div class="contain">
<div class="container">	
	
			<div id="content" class="clearfix row">		
				<div id="main" class="col col-sm-12 clearfix" role="main">
				<center>
					<div class="page-header">
					<?php if (is_category()) { ?>
						<h1 class="archive_title h2">
							 <?php single_cat_title(); ?>
						</h1>
					<?php } elseif (is_tag()) { ?> 
						<h1 class="archive_title h2">
							<span><?php _e("Posts Tagged:", "wpbootstrap"); ?></span> <?php single_tag_title(); ?>
						</h1>
					<?php } elseif (is_author()) { ?>
						<h1 class="archive_title h2">
							<span><?php _e("Posts By:", "wpbootstrap"); ?></span> <?php get_the_author_meta('display_name'); ?>
						</h1>
					<?php } elseif (is_day()) { ?>
						<h1 class="archive_title h2">
							<span><?php _e("Daily Archives:", "wpbootstrap"); ?></span> <?php the_time('l, F j, Y'); ?>
						</h1>
					<?php } elseif (is_month()) { ?>
					    <h1 class="archive_title h2">
					    	<span><?php _e("Monthly Archives:", "wpbootstrap"); ?>:</span> <?php the_time('F Y'); ?>
					    </h1>
					<?php } elseif (is_year()) { ?>
					    <h1 class="archive_title h2">
					    	<span><?php _e("Yearly Archives:", "wpbootstrap"); ?>:</span> <?php the_time('Y'); ?>
					    </h1>
					<?php } ?>
					</div>
					</center>
	<div id="container" class="js-masonry">
					<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
	<div class="grid-sizer"></div>
	<div class="item">
		<div class="panel panel-default">		
					<article id="post-<?php the_ID(); ?>" <?php post_class('clearfix'); ?> role="article">
						<div class="panel-header">
	
								<center><h3 class="h3box"><?php the_title(); ?></h3></center>
																				
						</div>
						
						<div class="panel-body">
							
							<?php the_tags('<p class="tags"><span class="tags-title">' . '</span> ', ' ', '</p>'); ?>
							
							<section class="post_content clearfix" itemprop="articleBody">
								
								<?php the_content(); ?>
								

							</section> <!-- end article section -->
						

					</div>
					</article> <!-- end article -->
		</div>
	</div>

	
					<?php endwhile; ?>	
</div>
					<?php if (function_exists('page_navi')) { // if expirimental feature is active ?>
						
						<?php page_navi(); // use the page navi function ?>

					<?php } else { // if it is disabled, display regular wp prev & next links ?>
						<nav class="wp-prev-next">
							<ul class="pager">
								<li class="previous"><?php next_posts_link(_e('&laquo; Older Entries', "wpbootstrap")) ?></li>
								<li class="next"><?php previous_posts_link(_e('Newer Entries &raquo;', "wpbootstrap")) ?></li>
							</ul>
						</nav>
					<?php } ?>
								
					
					<?php else : ?>
					
					<article id="post-not-found">
					    <header>
					    	<h1><?php _e("No Posts Yet", "wpbootstrap"); ?></h1>
					    </header>
					    <section class="post_content">
					    	<p><?php _e("Sorry, What you were looking for is not here.", "wpbootstrap"); ?></p>
					    </section>
					    <footer>
					    </footer>
					</article>
					
					<?php endif; ?>
			
				</div> <!-- end #main -->
    
				<?php // get_sidebar(); // sidebar 1 ?>
    
			</div> <!-- end #content -->
</div>
</div>
</div>



<?php get_footer(); ?>
