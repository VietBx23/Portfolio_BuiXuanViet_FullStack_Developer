<?php
// Khởi tạo mảng để lưu các ID bài viết đã hiển thị
$displayed_posts = array();
// Khởi tạo mảng để lưu các ID category đã hiển thị
$GLOBALS['displayed_categories'] = array();

get_header();
?>

<!-- 封推 -->
<div class="container tIndex">
	<h1 class="sr-only">话本小说 - 免费同人小说阅读网</h1>
	<div class="slide"> <a href="//pk." target="_blank"><img
				src="<?php echo get_template_directory_uri(); ?>/assets/picture/pk.png" alt="比比谁更美"></a>
	</div>
	<ul class="cover-right-list hidden-xs">
		<?php
		// Query 2 bài post cho banner bên phải
		$banner_args = array(
			'post_type' => 'tadu_book',
			'posts_per_page' => 2,
			'post__not_in' => $displayed_posts,
		);

		$banner_query = new WP_Query($banner_args);
		$banner_count = 0;

		if ($banner_query->have_posts()):
			while ($banner_query->have_posts()):
				$banner_query->the_post();
				$displayed_posts[] = get_the_ID();
				$banner_count++;

				// Li đầu tiên hiển thị trên cả desktop và tablet
				$li_class = ($banner_count == 1) ? '' : 'visible-md-inline-block visible-lg-inline-block';
				?>
				<li <?php if ($li_class)
					echo 'class="' . $li_class . '"'; ?>>
					<a href="<?php the_permalink(); ?>" target="_blank">
						<?php if (has_post_thumbnail()): ?>
							<?php the_post_thumbnail('large', ['class' => 'cover-full']); ?>
						<?php else: ?>
							<img src="<?php echo get_template_directory_uri(); ?>/assets/picture/default.png" class="cover-full"
								alt="<?php the_title(); ?>">
						<?php endif; ?>
					</a>
				</li>
				<?php
			endwhile;
		endif;
		wp_reset_postdata();
		?>
		<li class="visible-lg-inline-block" id="pList1">
			<a href="https://editor./#/editor/apply" target="_blank"><img
					src="<?php echo get_template_directory_uri(); ?>/assets/picture/wbzq.jpg" class="cover-half"
					alt="网编专区"></a>
			<a href="//www./topic/activity/literatureMatchThird.html" target="_blank"><img
					src="<?php echo get_template_directory_uri(); ?>/assets/picture/qrfcj.png" class="cover-half"
					alt="话本千人扶持计划"></a>
		</li>
	</ul>
</div>


<!-- <div class="container hidden-md hidden-lg middleButtons">
	<ul class="list-inline">
		<li>
			<a href="/"><i class="hicon-location"></i><span>角色广场</span></a>
		</li>
		<li>
			<a href="/girl"><i class="hicon-catalog"></i><span>分类</span></a>
		</li>
		<li>
			<a href="/wisrpen/home"><i class="hicon-zhibi"></i><span>智笔写作</span></a>
		</li>
		<li>
			<a href="/bookShelf/list"><i class="hicon-shelf"></i><span>收藏</span></a>
		</li>
		<li>
			<a href="/book"><i class="hicon-write"></i><span>写作</span></a>
		</li>
		<li>
			<a href="/user/"><i class="hicon-my"></i><span>我的</span></a>
		</li>
	</ul>
</div> -->

<div class="container tIndex">
	<!-- 同人专区 -->
	<div class="left-side">
		<h2>主编力荐 </h2>
		<?php
		$args = array(
			'post_type' => 'tadu_book',
			'posts_per_page' => 6,
			'post__not_in' => $displayed_posts,
		);

		$query = new WP_Query($args);
		?>

		<ul class="cover-list">
			<?php if ($query->have_posts()):
				while ($query->have_posts()):
					$query->the_post();
					$displayed_posts[] = get_the_ID();
					?>
					<li>
						<a href="<?php the_permalink(); ?>" target="_blank">
							<?php if (has_post_thumbnail()): ?>
								<?php the_post_thumbnail('large', ['class' => 'cover-full']); ?>
							<?php else: ?>
								<img src="<?php echo get_template_directory_uri(); ?>/assets/picture/default.png" class="cover-full"
									alt="<?php the_title(); ?>">
							<?php endif; ?>
						</a>

						<h4 class="text-center">
							<a href="<?php the_permalink(); ?>" target="_blank">
								<?php the_title(); ?>
							</a>
						</h4>

						<p class="text-center">
							<a href="<?php the_permalink(); ?>" target="_blank" class="text-lightgrey">
								<?php echo wp_trim_words(get_the_excerpt(), 18, '…'); ?>
							</a>
						</p>
					</li>
				<?php endwhile; endif;
			wp_reset_postdata(); ?>
		</ul>

	</div>

	<!-- 火热推荐 -->
	<div class="right-side hidden-xs hidden-sm hidden-md">
		<h2>男频力荐</h2>
		<?php
		$args = array(
			'post_type' => 'tadu_book',
			'posts_per_page' => 3,
			'order' => 'DESC',
			'post__not_in' => $displayed_posts,
		);

		$query = new WP_Query($args);
		$index = 1;
		?>

		<?php if ($query->have_posts()): ?>
			<?php while ($query->have_posts()):
				$query->the_post();
				$displayed_posts[] = get_the_ID();
				?>
				<div class="hotList">
					<a href="<?php the_permalink(); ?>" target="_blank">

						<?php if (has_post_thumbnail()): ?>
							<?php the_post_thumbnail('large', ['class' => 'cover-full']); ?>
						<?php else: ?>
							<img class="cover-full" src="<?php echo get_template_directory_uri(); ?>/assets/picture/default.png"
								alt="<?php the_title(); ?>">
						<?php endif; ?>

						<span class="order">
							<span class="no"><?php echo $index; ?></span>
						</span>
					</a>

					<div>
						<h4><a href="<?php the_permalink(); ?>" target="_blank"><?php the_title(); ?></a></h4>

						<p class="text-lightgrey">
							<?php echo wp_trim_words(get_the_excerpt(), 20, '…'); ?>
						</p>
					</div>
				</div>

				<?php $index++; ?>
			<?php endwhile; ?>
		<?php endif;
		wp_reset_postdata(); ?>

	</div>

</div>

<div class="container visible-xs-block tIndex">
	<div class="halfList">
	</div>
</div>

<div class="container tIndex">
	<div class="bottom-side">
		<h2>女生爱看！</h2>
		<ul class="cover-list">
			<?php
			$args = array(
				'post_type' => 'tadu_book',
				'posts_per_page' => 6,
				'orderby' => 'date',
				'order' => 'DESC',
				'post__not_in' => $displayed_posts,
			);

			$query = new WP_Query($args);

			if ($query->have_posts()):
				while ($query->have_posts()):
					$query->the_post();
					$displayed_posts[] = get_the_ID();
					?>
					<li>
						<a href="<?php the_permalink(); ?>" target="_blank">
							<?php if (has_post_thumbnail()): ?>
								<?php the_post_thumbnail('large', ['class' => 'cover-full']); ?>
							<?php else: ?>
								<img class="cover-full" src="<?php echo get_template_directory_uri(); ?>/assets/picture/default.png"
									alt="<?php the_title(); ?>">
							<?php endif; ?>
						</a>

						<h4 class="text-center">
							<a href="<?php the_permalink(); ?>" target="_blank">
								<?php the_title(); ?>
							</a>
						</h4>

						<p class="text-center">
							<a href="<?php the_permalink(); ?>" target="_blank" class="text-lightgrey">
								<?php echo wp_trim_words(get_the_excerpt(), 20, '…'); ?>
							</a>
						</p>
					</li>

					<?php
				endwhile;
			endif;
			wp_reset_postdata();
			?>
		</ul>

	</div>
	<div class="bottom-side">
		<h2>男生爱看！!</h2>
		<ul class="cover-list">
			<?php
			$args = array(
				'post_type' => 'tadu_book',
				'posts_per_page' => 6,
				'orderby' => 'date',
				'order' => 'DESC',
				'post__not_in' => $displayed_posts,
			);

			$query = new WP_Query($args);

			if ($query->have_posts()):
				while ($query->have_posts()):
					$query->the_post();
					$displayed_posts[] = get_the_ID();
					?>
					<li>
						<a href="<?php the_permalink(); ?>" target="_blank">
							<?php if (has_post_thumbnail()): ?>
								<?php the_post_thumbnail('large', ['class' => 'cover-full']); ?>
							<?php else: ?>
								<img class="cover-full" src="<?php echo get_template_directory_uri(); ?>/assets/picture/default.png"
									alt="<?php the_title(); ?>">
							<?php endif; ?>
						</a>

						<h4 class="text-center">
							<a href="<?php the_permalink(); ?>" target="_blank">
								<?php the_title(); ?>
							</a>
						</h4>

						<p class="text-center">
							<a href="<?php the_permalink(); ?>" target="_blank" class="text-lightgrey">
								<?php echo wp_trim_words(get_the_excerpt(), 20, '…'); ?>
							</a>
						</p>
					</li>

					<?php
				endwhile;
			endif;
			wp_reset_postdata();
			?>
		</ul>

	</div>
	<div class="bottom-side">
		<h2>好书精选</h2>
		<ul class="cover-list">
			<?php
			$args = array(
				'post_type' => 'tadu_book',
				'posts_per_page' => 6,
				'orderby' => 'date',
				'order' => 'DESC',
				'post__not_in' => $displayed_posts,
			);

			$query = new WP_Query($args);

			if ($query->have_posts()):
				while ($query->have_posts()):
					$query->the_post();
					$displayed_posts[] = get_the_ID();
					?>
					<li>
						<a href="<?php the_permalink(); ?>" target="_blank">
							<?php if (has_post_thumbnail()): ?>
								<?php the_post_thumbnail('large', ['class' => 'cover-full']); ?>
							<?php else: ?>
								<img class="cover-full" src="<?php echo get_template_directory_uri(); ?>/assets/picture/default.png"
									alt="<?php the_title(); ?>">
							<?php endif; ?>
						</a>

						<h4 class="text-center">
							<a href="<?php the_permalink(); ?>" target="_blank">
								<?php the_title(); ?>
							</a>
						</h4>

						<p class="text-center">
							<a href="<?php the_permalink(); ?>" target="_blank" class="text-lightgrey">
								<?php echo wp_trim_words(get_the_excerpt(), 20, '…'); ?>
							</a>
						</p>
					</li>

					<?php
				endwhile;
			endif;
			wp_reset_postdata();
			?>
		</ul>

	</div>

	<div class="bottom-side"></div>
</div>
<div class="container visible-xs-block tIndex">
	<div class="halfList">
	</div>
</div>
<div class="container visible-xs-block tIndex">
	<div class="left-side">
		<h2>火热推荐 </h2>
		<ul class="cover-list" id="pList2">
		</ul>
	</div>
</div>

<div class="container visible-xs-block tIndex">
	<div class="halfList">
	</div>
</div>

<div class="container tIndex">
	<div class="bottom-side">
		<h2>女生爱看！</h2>
		<ul class="cover-list">
			<?php
			$args = array(
				'post_type' => 'tadu_book',
				'posts_per_page' => 6,
				'orderby' => 'date',
				'order' => 'DESC',
				'post__not_in' => $displayed_posts,
			);

			$query = new WP_Query($args);

			if ($query->have_posts()):
				while ($query->have_posts()):
					$query->the_post();
					$displayed_posts[] = get_the_ID();
					?>
					<li>
						<a href="<?php the_permalink(); ?>" target="_blank">
							<?php if (has_post_thumbnail()): ?>
								<?php the_post_thumbnail('large', ['class' => 'cover-full']); ?>
							<?php else: ?>
								<img class="cover-full" src="<?php echo get_template_directory_uri(); ?>/assets/picture/default.png"
									alt="<?php the_title(); ?>">
							<?php endif; ?>
						</a>

						<h4 class="text-center">
							<a href="<?php the_permalink(); ?>" target="_blank">
								<?php the_title(); ?>
							</a>
						</h4>

						<p class="text-center">
							<a href="<?php the_permalink(); ?>" target="_blank" class="text-lightgrey">
								<?php echo wp_trim_words(get_the_excerpt(), 20, '…'); ?>
							</a>
						</p>
					</li>

					<?php
				endwhile;
			endif;
			wp_reset_postdata();
			?>
		</ul>

	</div>
	<div class="bottom-side">
		<h2>男生爱看！!</h2>
		<ul class="cover-list">
			<?php
			$args = array(
				'post_type' => 'tadu_book',
				'posts_per_page' => 6,
				'orderby' => 'date',
				'order' => 'DESC',
				'post__not_in' => $displayed_posts,
			);

			$query = new WP_Query($args);

			if ($query->have_posts()):
				while ($query->have_posts()):
					$query->the_post();
					$displayed_posts[] = get_the_ID();
					?>
					<li>
						<a href="<?php the_permalink(); ?>" target="_blank">
							<?php if (has_post_thumbnail()): ?>
								<?php the_post_thumbnail('large', ['class' => 'cover-full']); ?>
							<?php else: ?>
								<img class="cover-full" src="<?php echo get_template_directory_uri(); ?>/assets/picture/default.png"
									alt="<?php the_title(); ?>">
							<?php endif; ?>
						</a>

						<h4 class="text-center">
							<a href="<?php the_permalink(); ?>" target="_blank">
								<?php the_title(); ?>
							</a>
						</h4>

						<p class="text-center">
							<a href="<?php the_permalink(); ?>" target="_blank" class="text-lightgrey">
								<?php echo wp_trim_words(get_the_excerpt(), 20, '…'); ?>
							</a>
						</p>
					</li>

					<?php
				endwhile;
			endif;
			wp_reset_postdata();
			?>
		</ul>

	</div>
	<div class="bottom-side">
		<h2>好书精选</h2>
		<ul class="cover-list">
			<?php
			$args = array(
				'post_type' => 'tadu_book',
				'posts_per_page' => 6,
				'orderby' => 'date',
				'order' => 'DESC',
				'post__not_in' => $displayed_posts,
			);

			$query = new WP_Query($args);

			if ($query->have_posts()):
				while ($query->have_posts()):
					$query->the_post();
					$displayed_posts[] = get_the_ID();
					?>
					<li>
						<a href="<?php the_permalink(); ?>" target="_blank">
							<?php if (has_post_thumbnail()): ?>
								<?php the_post_thumbnail('large', ['class' => 'cover-full']); ?>
							<?php else: ?>
								<img class="cover-full" src="<?php echo get_template_directory_uri(); ?>/assets/picture/default.png"
									alt="<?php the_title(); ?>">
							<?php endif; ?>
						</a>

						<h4 class="text-center">
							<a href="<?php the_permalink(); ?>" target="_blank">
								<?php the_title(); ?>
							</a>
						</h4>

						<p class="text-center">
							<a href="<?php the_permalink(); ?>" target="_blank" class="text-lightgrey">
								<?php echo wp_trim_words(get_the_excerpt(), 20, '…'); ?>
							</a>
						</p>
					</li>

					<?php
				endwhile;
			endif;
			wp_reset_postdata();
			?>
		</ul>

	</div>

	<div class="bottom-side"></div>
</div>
<div class="container visible-xs-block tIndex">
	<div class="halfList">
	</div>
</div>
<div class="container visible-xs-block tIndex">
	<div class="left-side">
		<h2>火热推荐 </h2>
		<ul class="cover-list" id="pList2">
		</ul>
	</div>
</div>

<!-- 热门标签 -->
<div class="container tIndex">
	<div class="bottom-side">
		<h2>热门标签</h2>
		<ul class="tag-list">
			<?php
			$cats = get_terms(array(
				'taxonomy' => 'category',
				'orderby' => 'name',
				'order' => 'ASC',
				'number' => 20,
				'hide_empty' => false,
				'exclude' => array_merge(array(1), $GLOBALS['displayed_categories']), // Loại category ID = 1 và các category đã hiển thị
			));

			if (!empty($cats) && !is_wp_error($cats)):
				foreach ($cats as $cat):
					$GLOBALS['displayed_categories'][] = $cat->term_id; // Thêm ID vào mảng global
					?>
					<li>
						<h4 class="text-center">
							<a href="<?php echo esc_url(home_url('/tongren/?cat=' . $cat->slug)); ?>" target="_blank">
								<?php echo esc_html($cat->name); ?>
							</a>
						</h4>
					</li>

					<?php
				endforeach;
			endif;
			?>
		</ul>

	</div>
</div>

<!-- 完结推荐 -->
<div class="container tIndex">
	<div class="bottom-side">
		<h2>完结推荐</h2>
		<ul class="cover-list">
			<?php
			$args = array(
				'post_type' => 'tadu_book',
				'posts_per_page' => 6,
				'orderby' => 'rand',
				'post__not_in' => $displayed_posts,
			);

			$query = new WP_Query($args);

			if ($query->have_posts()):
				while ($query->have_posts()):
					$query->the_post();
					$displayed_posts[] = get_the_ID();
					?>
					<li>
						<a href="<?php the_permalink(); ?>" target="_blank">
							<?php if (has_post_thumbnail()): ?>
								<?php the_post_thumbnail('large', ['class' => 'cover-full']); ?>
							<?php else: ?>
								<img class="cover-full" src="<?php echo get_template_directory_uri(); ?>/assets/picture/default.png"
									alt="<?php the_title(); ?>">
							<?php endif; ?>
						</a>

						<h4 class="text-center">
							<a href="<?php the_permalink(); ?>" target="_blank">
								<?php the_title(); ?>
							</a>
						</h4>

						<p class="text-center">
							<a href="<?php the_permalink(); ?>" target="_blank" class="text-lightgrey">
								<?php echo wp_trim_words(get_the_excerpt(), 20, '…'); ?>
							</a>
						</p>
					</li>

					<?php
				endwhile;
			endif;
			wp_reset_postdata();
			?>
		</ul>
	</div>
</div>

<!-- 新书上架 -->
<div class="container tIndex">
	<div class="bottom-side">
		<h2>新书上架</h2>
		<ul class="cover-list">
			<?php
			$args = array(
				'post_type' => 'tadu_book',
				'posts_per_page' => 6,
				'orderby' => 'date',
				'order' => 'DESC',
				'post__not_in' => $displayed_posts,
			);

			$query = new WP_Query($args);

			if ($query->have_posts()):
				while ($query->have_posts()):
					$query->the_post();
					$displayed_posts[] = get_the_ID();
					?>
					<li>
						<a href="<?php the_permalink(); ?>" target="_blank">
							<?php if (has_post_thumbnail()): ?>
								<?php the_post_thumbnail('large', ['class' => 'cover-full']); ?>
							<?php else: ?>
								<img class="cover-full" src="<?php echo get_template_directory_uri(); ?>/assets/picture/default.png"
									alt="<?php the_title(); ?>">
							<?php endif; ?>
						</a>

						<h4 class="text-center">
							<a href="<?php the_permalink(); ?>" target="_blank">
								<?php the_title(); ?>
							</a>
						</h4>

						<p class="text-center">
							<a href="<?php the_permalink(); ?>" target="_blank" class="text-lightgrey">
								<?php echo wp_trim_words(get_the_excerpt(), 20, '…'); ?>
							</a>
						</p>
					</li>

					<?php
				endwhile;
			endif;
			wp_reset_postdata();
			?>
		</ul>
	</div>
</div>

<!-- 编辑精选 -->
<div class="container tIndex">
	<div class="bottom-side">
		<h2>编辑精选</h2>
		<ul class="cover-list">
			<?php
			$args = array(
				'post_type' => 'tadu_book',
				'posts_per_page' => 6,
				'orderby' => 'rand',
				'post__not_in' => $displayed_posts,
			);

			$query = new WP_Query($args);

			if ($query->have_posts()):
				while ($query->have_posts()):
					$query->the_post();
					$displayed_posts[] = get_the_ID();
					?>
					<li>
						<a href="<?php the_permalink(); ?>" target="_blank">
							<?php if (has_post_thumbnail()): ?>
								<?php the_post_thumbnail('large', ['class' => 'cover-full']); ?>
							<?php else: ?>
								<img class="cover-full" src="<?php echo get_template_directory_uri(); ?>/assets/picture/default.png"
									alt="<?php the_title(); ?>">
							<?php endif; ?>
						</a>

						<h4 class="text-center">
							<a href="<?php the_permalink(); ?>" target="_blank">
								<?php the_title(); ?>
							</a>
						</h4>

						<p class="text-center">
							<a href="<?php the_permalink(); ?>" target="_blank" class="text-lightgrey">
								<?php echo wp_trim_words(get_the_excerpt(), 20, '…'); ?>
							</a>
						</p>
					</li>

					<?php
				endwhile;
			endif;
			wp_reset_postdata();
			?>
		</ul>
	</div>
</div>

<?php get_footer(); ?>