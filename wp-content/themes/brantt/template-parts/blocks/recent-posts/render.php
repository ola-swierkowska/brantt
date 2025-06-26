<?php
$textarea1  = $attributes['textarea1'] ?? '';
$textarea2  = $attributes['textarea2'] ?? '';
$buttonText = $attributes['buttonText'] ?? '';
$bg = esc_attr( $attributes['style']['color']['background'] ?? '' );
$order = strtoupper( $attributes['order'] ?? 'DESC' );
?>

<div class="recent-posts-block py-5"
  style="<?php echo $bg ? "background-color:{$bg};" : ''; ?>"
>
  <div class="container">
    <div class="d-flex justify-content-between">
      <h4 class="color-red"><strong><?php echo wp_kses_post( $textarea1 ); ?></strong></h4>
      <div class="recent-posts-block__view-all"><?php echo wp_kses_post($buttonText); ?></div>
    </div>
    <h2><?php echo wp_kses_post( $textarea2 ); ?></h2>
    <?php
      $featured_query = new WP_Query( [
          'post_type'      => 'post',
          'posts_per_page' => 1,
          'meta_key'       => '_is_featured',
          'meta_value'     => 'yes',
          'orderby'        => 'date',
          'order'          => $order,
      ] );

      $featured_id = 0;
      if ( $featured_query->have_posts() ) {
          $featured_query->the_post();
          $featured_id = get_the_ID();
          $image_id = get_post_thumbnail_id();
          ?>

          <a href="<?php the_permalink(); ?>" class="d-flex recent-posts-block__featured bg-white mb-5">
            <div class="col-xl-4">
              <?php echo wp_kses_post( wp_get_attachment_image( $image_id, 'medium-large' ) ); ?>
            </div>
            <div class="col-xl-8 col-2xl-6 p-3 p-xl-6">
              <p class="overtitle text-uppercase d-flex align-items-center">
                <?php echo file_get_contents( get_template_directory() . '/svg/star.svg' ); ?> 
                <strong><?php echo esc_html__( 'Featured Post', 'brantt' ); ?></strong>
              </p>
              <h4 class="mb-3"><?php the_title(); ?></h4>
              <p><?php the_excerpt(); ?></p>
            </div>
          </a>
          <?php
          wp_reset_postdata();
      }

      $args = [
          'post_type'      => 'post',
          'posts_per_page' => 3,
          'orderby'        => 'date',
          'order'          => $order,
      ];
      if ( $featured_id ) {
          $args['post__not_in'] = [ $featured_id ];
      }

      $newest_query = new WP_Query( $args );

      if ( $newest_query->have_posts() ) {
        ?>
          <div class="d-flex flex-column flex-xl-row recent-posts-block__row-wrapper">
          <?php
          while ( $newest_query->have_posts() ) {
            $newest_query->the_post();
            $image_id = get_post_thumbnail_id();
            ?>
            <a href="<?php the_permalink(); ?>"  class="recent-posts-block__latest col-xl-4">
              <div class="image-wrapper">
                <?php echo wp_kses_post( wp_get_attachment_image( $image_id, 'medium-large' ) ); ?>
              </div>
               <div class="text-wrapper bg-white">
                <h4 class="text-uppercase"><?php the_title(); ?></h4>
                <p><?php the_excerpt(); ?></p>
                <div class="read-more-btn bg-green w-100">
                  <?php echo esc_html__( 'Read more', 'brantt' ); ?>
                </div>
               </div>
            </a>
              <?php
          }
          ?>
          </div>
          <?php
          wp_reset_postdata();
      }; ?>
  </div>
</div>
