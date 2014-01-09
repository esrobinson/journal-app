JournalApp.Collections.Posts = Backbone.Collection.extend({
  url: "/api/posts/",
  model: JournalApp.Models.Post


});