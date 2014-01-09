JournalApp.Views.PostForm = Backbone.View.extend({

  events: {
    "submit form#post_form": "submit"
  },

  initialize: function(options){
    this.post = options.post;
  },

  template: JST['post_form'],

  render: function(){
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  submit: function(event){
    event.preventDefault();
    var view = this;

    $form = $(event.currentTarget);
    formData = $form.serializeJSON();
    this.post.set(formData);
    this.post.save({}, {
      success: function(){
        router.navigate("posts/" + view.post.id, {trigger: true})
      }
    });
  }

});