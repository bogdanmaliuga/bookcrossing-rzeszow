Meteor.publish('books', function() {
  return Books.find();
});
Meteor.publish('comments', function(bookId) {
check(bookId,Match.Any);
  return Comments.find({bookId: bookId});
});