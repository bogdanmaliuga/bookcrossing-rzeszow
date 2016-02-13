Template.bookAdd.events({
    'submit form': function (e) {
        e.preventDefault();

        var book = {
            title: $(e.target).find('[name=title]').val(),
            author: $(e.target).find('[name=author]').val(),
            isbn: $(e.target).find('[name=isbn]').val(),
            location: $(e.target).find('[name=location]').val(),
            status: $(e.target).find('[name=status]').val()
        };


        
        Meteor.call('bookInsert', book, function (error, result) {

            if (error)
                return alert(error.reason);
            Router.go('bookPage', {
                _id: result._id
            });
        });
        Router.go('booksList');


    }
});