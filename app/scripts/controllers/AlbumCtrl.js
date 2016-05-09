(function() {
  function AlbumCtrl(Fixtures) {
    var vm = this;
    vm.albumData = Fixtures.getAlbum();
  }

  angular
    .module('blocJams')
    .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
})();
