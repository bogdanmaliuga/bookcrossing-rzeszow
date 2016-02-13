Comments = new Meteor.Collection('comments');
Comments.allow({
  insert: function(userId, doc) {
    return !! userId;
  }
});
Meteor.methods({
  comment: function(commentAttributes) {
           check(commentAttributes,{
            bookId:String,
            body:String
        });
      
   var user = Meteor.user();
   var book = Books.findOne(commentAttributes.bookId);
     if (!user)
      throw new Meteor.Error(401, "You need to login to make comments");
    if (!commentAttributes.body)
      throw new Meteor.Error(422, 'Please write some content');
    if (!book)
      throw new Meteor.Error(422, 'You must comment on a post');
    comment = _.extend(_.pick(commentAttributes, 'bookId', 'body'), {
      userId: user._id,
      authorName: user.username,
      submitted: new Date().getTime()
    });
      
    Books.update(comment.bookId, {$inc: {commentsCount: 1}});  
    return Comments.insert(comment);
  }
});