const { registerBlockType } = window.wp.blocks;
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, URLInputButton, InspectorControls } from '@wordpress/block-editor';
import { TextareaControl, PanelBody, SelectControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';


wp.blocks.registerBlockType('brantt/recent-posts', {
  example: {},
  edit({ attributes, setAttributes }) {
    const { textarea1, textarea2, buttonText, order } = attributes;
    const featured = useSelect(
      (select) =>
        select('core').getEntityRecords('postType', 'post', {
          per_page: 1,
          meta_key: '_is_featured',
          meta_value: 'yes',
          orderby: 'date',
          order: order || 'desc',
        }),
      [order]
    );

    const featuredId = featured?.[0]?.id;
    const latest = useSelect(
      (select) =>
        select('core').getEntityRecords('postType', 'post', {
          per_page: 3,
          orderby: 'date',
          order: order || 'desc',
          exclude: featuredId ? [featuredId] : undefined,
        }),
      [order, featuredId]
    );

    return (
  <div {...useBlockProps()}>
    <RichText
      tagName="p"
      placeholder="Wpisz nadtytuł"
      value={textarea1}
      onChange={(val) => setAttributes({ textarea1: val })}
    />
    <RichText
      tagName="p"
      placeholder="Wpisz tytuł"
      value={textarea2}
      onChange={(val) => setAttributes({ textarea2: val })}
    />
    <RichText
      tagName="a"
      className="button"
      value={buttonText}
      onChange={(val) => setAttributes({ buttonText: val })}
      placeholder="Tekst na przycisku"
    />
    <InspectorControls>
      <PanelBody title="Sortowanie postów">
        <SelectControl
          label="Kolejność postów"
          value={order}
          options={[
            { label: 'Najnowsze (DESC)', value: 'desc' },
            { label: 'Najstarsze (ASC)', value: 'asc' },
          ]}
          onChange={(val) => setAttributes({ order: val })}
        />
      </PanelBody>
    </InspectorControls>
        {featured && featured[0] && (
            <a href={featured[0].link} className="recent-posts-block__featured">
              <img src={featured[0].featured_media_url} alt="" />
              <div>
                <h5>Featured Post</h5>
                <h3>{featured[0].title.rendered}</h3>
                <p dangerouslySetInnerHTML={{ __html: featured[0].excerpt.rendered.replace(/<\/?p>/g, '') }} />
              </div>
            </a>
          )}

          {latest && latest.length > 0 && (
            <div>
              {latest.map((p) => (
                <a key={p.id} href={p.link} className="recent-posts-block__latest col-xl-4">
                  <img src={p.featured_media_url} alt="" />
                  <h3>{p.title.rendered}</h3>
                  <p dangerouslySetInnerHTML={{ __html: p.excerpt.rendered.replace(/<\/?p>/g, '') }} />
                </a>
              ))}
            </div>
          )}
          </div>
    );
  },

  save() {
    return null;
    
  },
});
