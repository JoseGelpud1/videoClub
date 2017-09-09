'use strict';

angular.module('videoClubApp', [
        'videoClubApp.constants',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ui.router',
        'ui.bootstrap',
        "satellizer",
        'ngMessages'
    ])
    .constant("API", "http://localhost:8080/adsi2017_backend_completo-master")
    .config(function($authProvider, API) {
        $authProvider.loginUrl = API + "/api/auth/login";
        $authProvider.tokenName = "token";
        $authProvider.tokenPrefix = "VideoClub";
    })
    .config(function($urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');

        $locationProvider.html5Mode(true);
    });