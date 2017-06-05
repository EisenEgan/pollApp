angular.module('pollApp')
.constant("baseUrl", "http://localhost:3000/api/polls/")
.service('pollDataService', pollDataService);

function pollDataService($resource, baseUrl) {

  var pollResource = $resource(baseUrl + ":id", { id: "@id" })

  this.data = pollResource

  this.pollList = function() {
    return pollResource.query()
  }

  this.pollDisplay = function(poll) {
    poll.$delete()
  }

  this.createPoll = function(poll) {
    return new pollResource(poll).$save()
  }
  // $scope.pollResource = $resource('http://localhost:3000/api/polls')
  // $scope.submit = function() {
  //   var data = {}
  //   angular.copy($scope.data, data);
  //   data.options = data.options.split(/\r|\n/)
  //   new $scope.pollResource(data).$save().then((newPoll) => {
  //     console.log(newPoll)
  //     $location.path("/")
  //   })
  // }

  this.pollInfo = function(id) {
    var herp = {"_id": id}
    console.log(herp)
    return pollResource.get(herp)
  }
  //
  // function hotelDisplay(id) {
  //   return $http.get('/api/hotels/' + id).then(complete).catch(failed);
  // }
  //
  // function postReview(id, review) {
  //   return $http.post('/api/hotels/' + id + '/reviews', review).then(complete).catch(failed);
  // }
  //
  // function complete(response) {
  //   return response.data;
  // }
  //
  // function failed(error) {
  //   console.log(error.statusText);
  // }
}
