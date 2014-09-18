'use strict';

angular.module('core').factory('socket', ['socketFactory',
	function(socketFactory) {
    return socketFactory({
      prefix: '',
      ioSocket: io.connect('http://localhost:3000')
    });
  }
]);
