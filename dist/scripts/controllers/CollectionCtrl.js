(function() {
  function CollectionCtrl(Fixtures) {
    var vm = this;
    vm.albums = Fixtures.getCollection(12);
  }

  angular
    .module('blocJams')
    .controller('CollectionCtrl', ['Fixtures', CollectionCtrl]);
})();
