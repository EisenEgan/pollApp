angular.module('pollApp').controller('CreateController', CreateController);

function CreateController($scope, $resource, $location, pollDataService) {
  $scope.submit = function() {
    var data = {}
    if($scope.data && $scope.data.options) {
      angular.copy($scope.data, data)
      console.log(data.options)
      data.options = data.options.split(/\r|\n/)
      console.log(data.options)
    }
    if(data.name && data.options.length > 1) {
      pollDataService.createPoll(data).then((newPoll) => {
        console.log(newPoll)
      })
    } else {
      console.log('data not provided')
    }
  }
  // $scope.submit = function() {
  //   var data = {}
  //   angular.copy($scope.data, data);
  //   data.options = data.options.split(/\r|\n/)
  //   new $scope.pollResource(data).$save().then((newPoll) => {
  //     console.log(newPoll)
  //     $location.path("/")
  //   })
  // }
}
