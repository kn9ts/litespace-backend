module.exports = function(router) {
  'use strict';

  /* Load up the homepage */
  router.get('/*', function(req, res) {
    res.sendFile('index.html', {
      root: './public/'
    });
  });

  return router;
};

