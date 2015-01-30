@LayoutManager.TopNav.push {title: "Home", path: "home"}
topNavItems = @LayoutManager.TopNav
Template.TopNav.helpers
    getItems: ->
        topNavItems
