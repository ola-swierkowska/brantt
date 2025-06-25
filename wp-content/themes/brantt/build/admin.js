/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/admin.js ***!
  \**********************/
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.brantt-featured-note').forEach(function (input) {
    input.addEventListener('change', function () {
      const postId = input.getAttribute('data-post-id');
      const currentValue = input.value;
      const newValue = currentValue === 'yes' ? 'no' : 'yes';
      input.value = newValue;
      const xhr = new XMLHttpRequest();
      const params = new URLSearchParams();
      params.append('action', 'brantt_save_featured_note');
      params.append('post_id', postId);
      params.append('value', newValue);
      params.append('nonce', branttMetaBoxAjax.nonce);
      xhr.open('POST', branttMetaBoxAjax.ajax_url, true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.onload = function () {
        if (xhr.status === 200) {
          try {
            const response = JSON.parse(xhr.responseText);
            if (response.success) {
              console.log('Saved!');
            } else {
              console.log('Save failed.');
            }
          } catch (e) {
            console.error('Invalid JSON response');
          }
        } else {
          console.log('AJAX request failed.');
        }
      };
      xhr.send(params.toString());
    });
  });
});
/******/ })()
;
//# sourceMappingURL=admin.js.map