const { registerBlockType } = window.wp.blocks;
import { useBlockProps } from '@wordpress/block-editor';

registerBlockType('brantt/recent-posts', {
  edit() {
    return <div {...useBlockProps()}>🧱 Recent Posts Block</div>;
  },
  save() {
    return <div {...useBlockProps.save()}>🧱 Saved Recent Posts</div>;
  }
});
