(function() {
  function AlbumCtrl() {
    var vm = this;
    vm.albumData = angular.copy(albumPicasso);
  }

  angular
    .module('blocJams')
    .controller('AlbumCtrl', AlbumCtrl);
})();