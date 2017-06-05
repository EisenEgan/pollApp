angular.module('pollApp', ['ngRoute', 'ngResource']).config(config)

function config($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true)
  $routeProvider
    .when('/', {
      templateUrl: 'angular-app/poll-list/polls.html',
      controller: PollsController,
      controllerAs: 'vm'
    })
    .when('/polls/:id', {
      templateUrl: 'angular-app/poll-display/poll.html',
      controller: PollController,
      controllerAs: 'vm'
    })
    .when('/newpoll', {
      templateUrl: 'angular-app/poll-create/create.html',
      controller: CreateController,
      controllerAs: 'vm'
    })
}

// angular.module('pollApp')
// .controller('PollController', PollController)
// .controller('PollsController', PollsController)
//
// function PollController() {
// }
//
// function PollsController() {
//   console.log('works!')
// }
