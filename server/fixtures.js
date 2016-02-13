//if (Books.find().count() === 0) {
//  var now = new Date().getTime();
//
//  // create two users
//  var tomId = Meteor.users.insert({
//    profile: { name: 'Tom Coleman' }
//  });
//  var tom = Meteor.users.findOne(tomId);
//  var sachaId = Meteor.users.insert({
//    profile: { name: 'Sacha Greif' }
//  });
//  var sacha = Meteor.users.findOne(sachaId);
//
//  var telescopeId = Books.insert({
//    title: 'Introducing Telescope',
//    userId: sacha._id,
//    authorName: sacha.profile.name,
//    author:'Bohdan' ,
//    isbn:'1232142',
//    location:'Lviv',
//    status:'Free',
//    submitted: now - 7 * 3600 * 1000
//  });
//
//  Comments.insert({
//    bookId: telescopeId,
//    userId: tom._id,
//    authorName: tom.profile.name,
//    submitted: now - 5 * 3600 * 1000,
//    body: 'Interesting project Sacha, can I get involved?'
//  });
//
//  Comments.insert({
//    bookId: telescopeId,
//    userId: sacha._id,
//    authorName: sacha.profile.name,
//    submitted: now - 3 * 3600 * 1000,
//    body: 'You sure can Tom!'
//  });
//
//  Books.insert({
//    title: 'Meteor',
//    userId: tom._id,
//    authorName: tom.profile.name,
//    author: 'Igor',
//    isbn:'12321422',
//    location:'Lviv',
//    status:'Free',
//    submitted: now - 10 * 3600 * 1000
//  });
//
//  Books.insert({
//    title: 'The Meteor Book',
//    userId: tom._id,
//    authorName: tom.profile.name,
//    author: 'Ivan',
//    isbn:'12321422',
//    location:'Kyiv',
//    status:'Free',
//    submitted: now - 12 * 3600 * 1000
//  });
//}