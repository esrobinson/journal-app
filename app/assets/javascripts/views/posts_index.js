JournalApp.Views.PostsIndex = Backbone.View.extend({

  events: {
    "click button.delete": "removePost"
  },

  initialize: function(options){
    this.posts = options.posts;
    this.listenTo(this.posts, 'add change:title remove reset', this.render);
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
  }
  //
  // refresh: function(){
  //   var view = this
  //   this.posts.fetch({
  //     success: view.render.bind(view)
  //   });
  // }
});