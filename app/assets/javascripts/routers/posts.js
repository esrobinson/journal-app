JournalApp.Routers.Posts = Backbone.Router.extend({

  initialize: function($content, $sidebar){
    this.$content = $content;
    this.$sidebar = $sidebar;
    this.index();
  },

  routes: {
    "": "index",
    "posts/new": "newPost",
    "posts/:id": "show"
  },

  index: function(){
    posts = new JournalApp.Collections.Posts();
    posts.fetch({
      success: function(){
        view = new JournalApp.Views.PostsIndex({posts: posts});
        router.$sidebar.html(view.render().$el);
      }
    });
  },

  show: function(id){
    posts = new JournalApp.Collections.Posts();
    posts.fetch({
      success: function(){
        var post = posts.get(id);
        view = new JournalApp.Views.PostShow({post: post});
        router.$content.html(view.render().$el);
      }
    });
  },

  newPost: function(){
    var route = this;
    post = new JournalApp.Models.Post();
    view = new JournalApp.Views.PostForm({post: post});
    router.$content.html(view.render().$el);
  }
});