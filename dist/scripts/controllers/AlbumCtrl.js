(function() {
  function AlbumCtrl(Fixtures, SongPlayer) {
    var vm = this;
    vm.albumData = Fixtures.getAlbum();
    vm.songPlayer = SongPlayer;
  }

  angular
    .module('blocJams')
    .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
})();
