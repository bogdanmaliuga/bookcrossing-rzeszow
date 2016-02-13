Books = new Mongo.Collection('books');

Books.allow({
  insert: function(userId, doc) {
    
    return !! userId;
  },
  update:function(userId,doc){
      return !! userId;
  },
  remove:function(userId,doc){
      return !! userId;
  }
});


Meteor.methods({
  bookInsert: function(bookAttributes) {
    check(Meteor.userId(), String);
    check(bookAttributes, {
      title: String,
      author: String,
        isbn: String,
        location:String,
        status:String
    });
    var user = Meteor.user();
    var book = _.extend(_.pick(bookAttributes,'title','author','isbn','location','status'), {
      userId: user._id, 
      authorName: user.username, 
      submitted: new Date(),
      commentsCount:0
    });
    var bookId = Books.insert(book);
    return {
      _id: bookId
    };
  }
});