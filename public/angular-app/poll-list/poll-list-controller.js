angular.module('pollApp').controller('PollsController', PollsController);

function PollsController($scope, pollDataService) {
  //$scope.pollList;
  $scope.pollList = pollDataService.data.query()
  //$scope.pollList = pollDataService.pollList()
  // var vm = this;
  // vm.title = 'MEAN Hotel App';
  // hotelDataFactory.hotelList().then(function(response) {
  //   vm.hotels = response;
  // });
}
