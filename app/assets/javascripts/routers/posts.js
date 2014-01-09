JournalApp.Routers.Posts = Backbone.Router.extend({

  initialize: function($el){
    this.$el = $el
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
        router.$el.html(view.render().$el);
      }
    });
  },

  show: function(id){
    posts = new JournalApp.Collections.Posts();
    posts.fetch({
      success: function(){
        var post = posts.get(id);
        view = new JournalApp.Views.PostShow({post: post});
        form = new JournalApp.Views.PostForm({post :post});
        router.$el.html(view.render().$el).append(form.render().$el);
      }
    });
  },

  newPost: function(){
    var route = this;
    post = new JournalApp.Models.Post();
    view = new JournalApp.Views.PostForm({post: post});
    router.$el.html(view.render().$el);
  }
});