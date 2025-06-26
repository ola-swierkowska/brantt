<?php
add_action( 'init', function() {
    register_block_pattern(
        'brantt/recent-posts',
        array(
            'title'       => __( 'Najnowsze Posty', 'brantt' ),
            'description' => _x( 'Najnowsze posty.', 'Wyszczególniony post', 'brantt' ),
            'categories'  => array( 'posts' ),
            'content'     => '
                <!-- wp:brantt/recent-posts {"textarea1":"LATEST POSTS","textarea2":"Lorem ipsum dolor sit amit...","buttonText":"\u003ca href=\u0022http://localhost:8000/?page_id=54\u0022 data-type=\u0022page\u0022 data-id=\u002254\u0022\u003eView all posts\u003c/a\u003e","className":"wp-block-brantt-recent-posts has-primary-color has-text-color has-background has-link-color","style":{"color":{"background":"#22b5ab1a"}}} /-->
            ',
        )
    );
} );
