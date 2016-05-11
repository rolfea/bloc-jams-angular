(function() {
  function PlayerBarCtrl(Fixtures, SongPlayer) {
    var vm = this;
    vm.albumData = Fixtures.getAlbum();
    vm.songPlayer = SongPlayer;
  }

  angular
    .module('blocJams')
    .controller('PlayerBarCtrl', ['Fixtures', 'SongPlayer', PlayerBarCtrl]);
})();
