JournalApp.Views.PostsIndex = Backbone.View.extend({

  events: {
    "click button.delete": "removePost"
  },

  initialize: function(options){
    view = this;
    this.posts = options.posts;
    this.listenTo(this.posts, 'add', view.refresh);
    this.listenTo(this.posts, 'change: title', view.refresh);
    this.listenTo(this.posts, 'remove', view.refresh);
    this.listenTo(this.posts, 'reset', view.refresh);
  },

  template: JST["posts_index"],

  render: function(){
    var content = this.template({posts: this.posts});
    this.$el.html(content);
    return this;
  },

  removePost: function(event){
    var id = $(event.currentTarget).data('id');

    var post = this.posts.get(id);
    post.destroy();
  },

  refresh: function(){
    var view = this
    this.posts.fetch({
      success: view.render.bind(view)
    });
  }
});