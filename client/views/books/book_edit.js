Template.bookEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentBookId = this._id;

    var bookProperties = {
       title: $(e.target).find('[name=title]').val(),
            author: $(e.target).find('[name=author]').val(),
            isbn: $(e.target).find('[name=isbn]').val(),
            location: $(e.target).find('[name=location]').val(),
            status: $(e.target).find('[name=status]').val()
        };


    Books.update(currentBookId, {$set: bookProperties}, function(error) {
      if (error) {
        // display the error to the user
        alert(error.reason);
      } else {
        Router.go('bookPage', {_id: currentBookId});
      }
    });
  },

  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this post?")) {
      var currentBookId = this._id;
      Books.remove(currentBookId);
      Router.go('booksList');
    }
  }
});
