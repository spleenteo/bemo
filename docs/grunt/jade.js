module.exports = {
  compile: {
    options: {
      client: false,
      pretty: false,
      data: {
        loop: function(count) {
          var args = [];
          for (var i=1; i<=count; i++) {
            args.push(i);
          }
          return args;
        },
        titleize: function(className) {
          var title = className.replace(/\-/, ' ');
          return title[0].toUpperCase() + title.substring(1);
        }
      }
    },
    files: {
      '<%= package.paths.build %>/index.html': 'index.jade'
    }
  }
};

