class @PostController extends ApplicationController
    index: ->
        @render "PostsIndex"

    create: ->
        @render "PostCreate"


Router.map ->
    @route "PostsIndex",
        path: "/posts"
        controller: "PostController"
        action: "index"
    @route "PostCreate",
        path: "/post/create"
        controller: "PostController"
        action: "create"
