JournalApp.Views.PostForm = Backbone.View.extend({

  events: {
    "submit form#post_form": "submit"
  },

  initialize: function(options){
    this.post = options.post;
    this.errors = '';
  },

  template: JST['post_form'],

  render: function(){
    console.log(this.errors);
    var content = this.template({post: this.post, errors: this.errors});
    this.$el.html(content);
    return this;
  },

  submit: function(event){
    event.preventDefault();
    var view = this;

    var newPost = this.post.isNew();

    $form = $(event.currentTarget);
    formData = $form.serializeJSON();
    this.post.set(formData);
    this.post.save({}, {
      success: function(){
        router.navigate('/', {trigger: true})
      },
      error: function(post, errors){
        view.errors = errors.responseText;
        view.render();
      }
    });
  }

});