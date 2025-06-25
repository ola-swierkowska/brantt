<?php
/**
 * Add custom fields to posts.
 *
 * @package air-light
 */

namespace Air_Light;


function brantt_add_featured_meta_box() {
	add_meta_box(
		'is_featured_meta_box',
		'Featured Post',
		 __NAMESPACE__  . '\\brantt_featured_meta_box_callback',
		'post',
		'side',
		'default'
	);
}
add_action( 'add_meta_boxes',  __NAMESPACE__ . '\\brantt_add_featured_meta_box' );

function brantt_featured_meta_box_callback( $post ) {
	$is_featured = get_post_meta( $post->ID, '_is_featured', true );
	wp_nonce_field( 'brantt_featured_nonce_action', 'brantt_featured_nonce' );
	?>
	<p>
		<label>
			<input type="checkbox" name="is_featured" <?php checked( $is_featured, 'yes' ); ?> />
			<?php echo esc_html__( 'Mark as featured', 'brantt' ); ?>
		</label>
	</p>
	<?php
}

function brantt_save_featured_meta_box( $post_id ) {
	if ( ! isset( $_POST['brantt_featured_nonce'] ) ||
	     ! wp_verify_nonce( $_POST['brantt_featured_nonce'], 'brantt_featured_nonce_action' ) ) {
		return;
	}

	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) return;
	if ( ! current_user_can( 'edit_post', $post_id ) ) return;

	$is_featured = isset( $_POST['is_featured'] ) ? 'yes' : 'no';
	update_post_meta( $post_id, '_is_featured', $is_featured );
}
add_action( 'save_post',  __NAMESPACE__ . '\\brantt_save_featured_meta_box' );


//Show field as column in admin dahsboard
function brantt_add_featured_column( $columns ) {
	$columns['is_featured'] = 'Featured';
	return $columns;
}
add_filter( 'manage_post_posts_columns',  __NAMESPACE__ . '\\brantt_add_featured_column' );

function brantt_show_featured_column( $column, $post_id ) {
	if ( 'is_featured' === $column ) {

     $value = get_post_meta($post_id, '_is_featured', true);
     $checked = checked( $value, 'yes', false );
        echo '<input type="checkbox" class="brantt-featured-note" data-post-id="' . esc_attr($post_id) . '" value="' . esc_attr($value) . '"' . $checked . ' />';

	}
}
add_action( 'manage_post_posts_custom_column',  __NAMESPACE__ . '\\brantt_show_featured_column', 10, 2 );

//Allow for changing field value in the column
add_action('wp_ajax_brantt_save_featured_note', function () {
    if (!current_user_can('edit_posts') || !check_ajax_referer('brantt_save_meta', 'nonce', false)) {
        wp_send_json_error('Unauthorized');
    }

    $post_id = intval($_POST['post_id']);
    $value = sanitize_text_field($_POST['value']);

    $is_featured =  $value === 'yes' ? 'yes' : 'no';
    update_post_meta( $post_id, '_is_featured', $is_featured );
    wp_send_json_success('Saved');
});