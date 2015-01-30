Router.configure
    notFoundTemplate: "NotFound"

@ApplicationController = RouteController.extend
    layoutTemplate: "MainLayout"
    loadingTemplate: "Loading"
    
    onBeforeAction: ->
        Router.go "login" unless Meteor.userId()

        if Meteor.userId() and Router.current().route.getName() == "login"
            Router.go "home"
        @next()

    action: ->
        @next()

class @HomeController extends ApplicationController
    index: ->
        @render "Home"
    login: ->
        @render "LoginPage"

Router.map ->
    @route "home",
        path: "/"
        controller: "HomeController"
        action: "index"
    @route "login",
        path: "/login"
        controller: "HomeController"
        action: "login"
