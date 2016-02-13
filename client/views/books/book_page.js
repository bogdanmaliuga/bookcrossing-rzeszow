Template.bookPage.helpers({
  comments: function() {
    return Comments.find({bookId: this._id});
  }
});