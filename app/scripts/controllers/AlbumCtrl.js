(function() {
  function AlbumCtrl() {
    var vm = this;
    vm.albumData = [];
    vm.songData = [];
    vm.albumData.push(angular.copy(albumPicasso)); // should hold copy of AlbumPicasso
//    this.songData.push(angular.copy(albumPicasso.songs)); // is this necessary?
  }

  angular
    .module('blocJams')
    .controller('AlbumCtrl', AlbumCtrl);
})();