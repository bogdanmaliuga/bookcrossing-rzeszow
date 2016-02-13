Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
   waitOn: function() {
    return [Meteor.subscribe('books'), Meteor.subscribe('comments')];
  }
  
});
Router.route('/editProfile', function () {
    if (!Meteor.user()) {
        return Meteor.Error('non-authorized');
    }

    var user = Meteor.user();
    var data;
    
    
  data = {
        email: _.first(user.emails).address,
        name: user.username
     };

   
  this.render('editProfile', {
        data: function () {
            return {
                user: data,
                
            };
        }
    });
});
Router.map(function() {
  this.route('booksList', 
        {path: '/'
        
});
 
  this.route('bookEdit', {
    path: '/books/:_id/edit',
    data: function() { return Books.findOne(this.params._id); }
  });
    
  this.route('bookPage', {
    path: '/books/:_id',
    waitOn: function() {
      return Meteor.subscribe('comments', this.params._id);
    },
    data: function() { return Books.findOne(this.params._id); }
  });


});
  
var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}




Router.route('/add', {name: 'bookAdd'});
Router.onBeforeAction('loading');
Router.onBeforeAction(requireLogin, {only: 'bookAdd'});
Router.onBeforeAction('dataNotFound', {only: 'bookPage'});