/* jshint: browser */
/* globals document */
'use strict';

[].forEach.call(document.querySelectorAll('button.dropdown'), function(el) {
  el.addEventListener('click', function() {
    var cls = document.querySelector('aside.sidebar').classList;
    if (cls.contains('active')) {
      cls.add('inactive');
      cls.remove('active');
    }
    else {
      cls.add('active');
      cls.remove('inactive');
    }
  });
});
