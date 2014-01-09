JournalApp.Views.PostShow = Backbone.View.extend({

  initialize: function(options){
    this.post = options.post;
  },

  template: JST['post_show'],

  render: function(){
    console.log(this.post)
    content = JST['post_show']({post: this.post});
    this.$el.html(content);
    return this;
  }

});