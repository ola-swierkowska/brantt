<?php
/**
 * Template for displaying the footer
 *
 * Site footer.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 * @package air-light
 */

namespace Air_Light;

?>

</div><!-- #content -->

<footer id="colophon" class="footer">

   <div class="container">
      <div class="site-info">
        <a class="no-external-link-indicator powered-by-wordpress" href="<?php echo esc_url( __( 'http://wordpress.org/', 'air-light' ) ); ?>">
          <span>
            <?php printf( esc_html__( 'Copyright %s', 'brantt' ), 'Ola Świerkowska' ); ?>.
          </span>
        </a>
      </div>
   </div>
 
</footer><!-- #colophon -->

</div><!-- #page -->

<?php wp_footer(); ?>

<a
  href="#page"
  id="top"
  class="top no-external-link-indicator"
  data-version="<?php echo esc_attr( AIR_LIGHT_VERSION ); ?>"
>
  <span class="screen-reader-text"><?php echo esc_html( get_default_localization( 'Back to top' ) ); ?></span>
  <span aria-hidden="true">&uarr;</span>
</a>

</body>
</html>
