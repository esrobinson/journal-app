JournalApp.Views.PostShow = Backbone.View.extend({

  events: {
    "dblclick .post-text": "editText",
    "blur .edit": "updatePost"
  },

  initialize: function(options){
    this.post = options.post;
    this.listenTo(this.post, 'change', this.render);
  },

  template: JST['post_show'],

  render: function(){
    console.log(this.post)
    content = JST['post_show']({post: this.post});
    this.$el.html(content);
    return this;
  },

  editText: function(event){
    $postElement = $(event.currentTarget);
    type = $postElement.data('id');
    $('.' + type).toggleClass('hidden');
    $('input.' + type).focus();
  },

  updatePost: function(event){
    var view = this;
    $target = $(event.currentTarget);
    this.post.set($target.data('id'), $target.val());
    this.post.save();
  }

});