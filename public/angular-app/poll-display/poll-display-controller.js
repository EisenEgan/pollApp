angular.module('pollApp').controller('PollController', PollController);

function PollController($scope, $routeParams, pollDataService ) {
  $scope.vote = function() {

  }
  pollDataService.data.get({id: $routeParams.id}).$promise.then((data) => {
    var optionsLength = data.options.length
    var colorArray = ["#2ecc71", "#3498db", "#95a5a6", "#9b59b6", "#f1c40f", "#e74c3c", "#34495e"]
    var pollColorArray = []
    for (var i=0; i<optionsLength; i++) {
      pollColorArray.push(colorArray[i%7])
    }
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: data.options,
        datasets: [{
          backgroundColor: pollColorArray,
          data: data.votes
        }]
      },
      options: {legend: {position: "bottom", labels: {boxWidth: 12}}}
    });
    data.options.push('Add an option')
    $scope.details = data
  })
  $scope.update = function() {
    $scope.showInput = $scope.selected == 'Add an option'?true:false
  }
}
