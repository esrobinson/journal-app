window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    //alert('Hello from Backbone!');
    // posts = new JournalApp.Collections.Posts()
    // posts.fetch({
    //   success: function(){
    //     view = new JournalApp.Views.PostsIndex({ posts: posts })
    //     $("#content").append(view.render().$el);
    //   }
    // });
    router = new JournalApp.Routers.Posts($('#content'), $('#sidebar'));

    Backbone.history.start();
  }
};

$(document).ready(function(){
  JournalApp.initialize();
});
