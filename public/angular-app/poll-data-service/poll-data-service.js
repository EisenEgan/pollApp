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

  }

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
